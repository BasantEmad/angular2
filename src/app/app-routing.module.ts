import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import{AboutComponent} from './about/about.component';
import{AtmbranchesComponent} from './atmbranches/atmbranches.component'; 
import {CustomerComponent} from './customer/customer.component';
import { RegesterationComponent } from './regesteration/regesteration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  {path:"home", component:HomeComponent },
  {path:"about" , component:AboutComponent},
   {path:"atmbranches" , component:AtmbranchesComponent},
   {path: "customer" , component:CustomerComponent},
  {path:"" , component:HomeComponent },
  {path:"regesteration" , component:RegesterationComponent},
  {path:"contactus" , component:ContactusComponent},
  {path:"login" , component:LoginComponent}
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
