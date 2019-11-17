import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from './product';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProduct(){
     return this.http.get<any[]>('http://localhost/php_oop_crud/api/list.php');
  }

  deleteProduct(id){
    return this.http.delete<Product[]>('http://localhost/php_oop_crud/api/delete.php?id='+ id);
  }

  createProduct(product: Product){
    return this.http.post('http://localhost/php_oop_crud/api/store.php', { data: product });
  }
  
  updateProduct(product: Product){
    return this.http.post('http://localhost/php_oop_crud/api/update.php', { data: product });
  }

  getProductsById(id){
    return this.http.get<Product[]>('http://localhost/php_oop_crud/api/single-product.php?id='+ id);
  }


}
