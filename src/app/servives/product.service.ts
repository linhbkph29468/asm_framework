import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { IProduct } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = "http://localhost:3000/products"

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL)
  }
  getOne(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`)
  }
  add(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}`, product)
  }
  update(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(`${this.API_URL}/${product.id}`, product)
  }
  remove(id: number): Observable<any> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  }
}
