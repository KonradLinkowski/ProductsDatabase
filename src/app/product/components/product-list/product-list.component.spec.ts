import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { ProductService } from '../../services/product/product.service';
import { products } from '../../services/product/products.mock';
import { of } from 'rxjs';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    const productService: Partial<ProductService> = {
      getProducts() {
        return of(products);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ ProductListComponent, ProductListItemComponent ],
      providers: [
        { provide: ProductService, useValue: productService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
