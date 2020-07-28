import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog, ConfirmDialogData } from 'src/shared/components/confirm/confirm.dialog';
import { UploadImageDialog, UploadImageDialogData } from 'src/shared/components/upload-image/upload-image.dialog';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})
export class ProductsListItemComponent {
  @Input() product: Product;
  @Input() readonly = true;
  isOpen = false;

  constructor(private productService: ProductService, private matDialog: MatDialog) {}

  openDeleteDialog() {
    const data: ConfirmDialogData = {
      title: 'Delete product',
      description: 'Do you want to delete this product?'
    };

    const ref = this.matDialog.open(ConfirmDialog, {
      data
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.productService.deleteProduct(this.product.id).subscribe();
      }
    });
  }

  openUploadDialog() {
    const data: UploadImageDialogData = {
      productId: this.product.id
    };

    this.matDialog.open(UploadImageDialog, {
      data
    });
  }

  get priceMin(): number {
    if (this.product.variants.length === 1) {
      return this.product.variants[0].price;
    }
    const prices = this.product.variants.map(v => v.price);
    const min = Math.min(...prices);
    return min;
  }

  get priceMax(): number {
    if (this.product.variants.length === 1) {
      return null;
    }
    const prices = this.product.variants.map(v => v.price);
    const max = Math.max(...prices);
    return max;
  }
}
