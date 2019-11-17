import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private productService: ProductService,
    private router: Router) { }

  registerForm: FormGroup;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        id:[],
        name: ['', Validators.required],
        slug: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required]
    }, {
    });
}

  onSubmit(){
    this.productService.createProduct(this.registerForm.value)
    .subscribe(data =>{
      alert("Insert Successfull");
      this.router.navigate(['view']);
    },
    (err) => {
      console.log('insert error',err);
    });
  }

}
