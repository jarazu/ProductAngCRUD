import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { UlTreeComponent } from './ul-tree/ul-tree.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';


export const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'view', component:ViewComponent},
  {path:'add', component:AddComponent},
  {path:'ul-tree', component:UlTreeComponent},
  {path:'edit/:id', component:EditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    UlTreeComponent,
    HomeComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
