import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutUsComponent } from '../aboutus/about-us.component';
import { ContactFormComponent } from '../contactform/contact-form.component';
import { ContactUsComponent } from '../contactus/contact-us.component';

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