import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
import { AtmbranchesComponent } from './atmbranches/atmbranches.component';
import { RegesterationComponent } from './regesteration/regesteration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';









@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CustomerComponent,
    AboutComponent,
    AtmbranchesComponent,
    RegesterationComponent,
    ContactusComponent,
    LoginComponent,
   
    
    
    
    


   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
