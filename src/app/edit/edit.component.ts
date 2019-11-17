import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private productService: ProductService,
    private router: Router,
    private routes: ActivatedRoute) { }
    routeParamId:any;
  updateForm: FormGroup;
  ngOnInit() {
     this.routeParamId = this.routes.snapshot.params.id;
    console.log('routerParam', this.routeParamId);
    this.getProductsById();
    this.updateForm = this.formBuilder.group({
        id:[],
        name: ['', Validators.required],
        slug: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required]
    }, {
    });
}

  onEdit(){
      this.productService.updateProduct(this.updateForm.value)
      .subscribe(data =>{
        debugger;
        alert("Update Successfull");
        this.router.navigate(['view']);
      },
      (err) => {
        console.log('insert error',err);
      });
     }

     getProductsById(){
      this.productService.getProductsById(this.routeParamId)
      .subscribe((data: any)=>{
        this.updateForm.patchValue(data.data);
      });
     }
    

  
}
