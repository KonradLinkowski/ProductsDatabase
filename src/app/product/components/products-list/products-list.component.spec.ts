import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { ProductsListItemComponent } from '../products-list-item/products-list-item.component';
import { ProductService } from '../../services/product/product.service';
import { products } from '../../services/product/products.mock';
import { of } from 'rxjs';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async(() => {
    const productService: Partial<ProductService> = {
      getProducts() {
        return of(products);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ ProductsListComponent, ProductsListItemComponent ],
      providers: [
        { provide: ProductService, useValue: productService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
