import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutUsComponent } from '../aboutUs/about-us.component';
import { ContactFormComponent } from '../contactForm/contact-form.component';
import { ContactUsComponent } from '../contactUs/contact-us.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  

}
const routes: Routes = [

{ path: 'about-us', component:AboutUsComponent},
{ path: 'contact-form', component:  ContactFormComponent },
  { path: 'contact-us', component:  ContactUsComponent },
  
];