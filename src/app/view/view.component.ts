import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  products: Product[];
  showUpdate: boolean = true;
  productEditModel: Product;
  id: number;

  constructor(private productService: ProductService, 
    private router: Router ) { }

  updateForm: FormGroup;

  ngOnInit() {
    this.getData();
  }
  
  getData(){
    this.productService.getProduct()
    .subscribe((data: any)=>{
      // debugger;
        this.products = data.data;
        console.log(this.products);
    });
  }
  
  delete(product: Product):void{
    console.log(product);
    this.productService.deleteProduct(product.id)
    .subscribe(data =>{
        this.getData();
        alert("Delte Successfull");
    });
  }

  edit(product: Product){
    this.id = product.id;
    this.router.navigate(['edit/' + this.id]);
  }


}
