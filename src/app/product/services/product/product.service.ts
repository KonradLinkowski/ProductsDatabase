import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ProductService {
  private collectionName = 'products';

  constructor(private firestore: AngularFirestore) { }

  getProducts(): Observable<Product[]> {
    return this.firestore.collection<Product>(this.collectionName).valueChanges({ idField: 'id' });
  }

  getProduct(id: string): Observable<Product> {
    return this.firestore.collection(this.collectionName).doc<Product>(id).valueChanges();
  }
}
