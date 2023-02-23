import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<any[]> {
    return of(products);
  }
}
