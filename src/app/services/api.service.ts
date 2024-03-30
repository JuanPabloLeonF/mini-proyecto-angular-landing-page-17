import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://fakestoreapi.com/products';
  private _httpClient = inject(HttpClient);

  getAllProducts():Observable<any> {
    return this._httpClient.get(this.baseUrl);
  }

  getProductById(id: number):Observable<any> {
    return this._httpClient.get<any>(`${this.baseUrl}/${id}`);
  }
}
