import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Product } from '../../models/product.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private collectionName = 'products';

  constructor(private firestore: AngularFirestore) { }

  getProducts(): Observable<Product[]> {
    return this.firestore.collection<Product>(this.collectionName).valueChanges({ idField: 'id' });
  }

  getProduct(id: string): Observable<Product> {
    return this.firestore.collection(this.collectionName)
      .doc<Product>(id)
      .get()
      .pipe(map(snapshot => ({ id: snapshot.id, ...snapshot.data() } as Product)));
  }

  updateProduct(id: string, product: Partial<Product>) {
    const promise = this.firestore.collection(this.collectionName).doc<Product>(id).update(product);
    return from(promise);
  }
}
