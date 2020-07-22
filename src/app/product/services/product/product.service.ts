import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { products } from './products.mock';
import { Product } from '../../models/product.model';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(products);
  }
}
