import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './aboutus/about-us.component';
import { ContactFormComponent } from './contactform/contact-form.component';
import { ContactUsComponent } from './contactus/contact-us.component';
import { PrivacyPolicyComponent } from './privacypolicy/privacy-policy.component';
import {SiteMapComponent } from './sitemap/site-map.component';
import {TermsAndConditionComponent } from './terms and condition/terms-and-condition.component';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about-us', component:AboutUsComponent},
  { path: 'contact-form', component:  ContactFormComponent },
  { path: 'contact-us', component:  ContactUsComponent },
  { path: 'privacy-policy', component:  PrivacyPolicyComponent },
  { path: 'terms-and-condition', component: TermsAndConditionComponent },
  { path: 'site-map', component:  SiteMapComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactFormComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    SiteMapComponent,
    TermsAndConditionComponent,
    HeaderComponent,
    FooterComponent
   
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
