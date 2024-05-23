import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlProducts = 'https://raw.githubusercontent.com/ismaeleamsi83/veosat/main/src/app/products.json';

  constructor(public http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(this.urlProducts);
  }
}
