import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './aboutUs/about-us.component';
import { ContactFormComponent } from './contactForm/contact-form.component';
import { ContactUsComponent } from './contactUs/contact-us.component';
import { PrivacyPolicyComponent } from './privacyPolicy/privacy-policy.component';
/*import {SiteMapComponent } from './siteMap/site-map.component';*/
import {TermsAndConditionComponent } from './termsAndCondition/terms-and-condition.component';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterModule} from './footer/footer.module'
import { headerModule } from './header/header.module'
import { FaqComponent } from './faq/faq.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about-us', component:AboutUsComponent},
  { path: 'contact-form', component:  ContactFormComponent },
  { path: 'contact-us', component:  ContactUsComponent },
  { path: 'privacy-policy', component:  PrivacyPolicyComponent },
  { path: 'terms-and-condition', component: TermsAndConditionComponent },
  { path: 'faq', component: FaqComponent },
  /*{ path: 'site-map', component:  SiteMapComponent },*/

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactFormComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    /*SiteMapComponent,*/
    TermsAndConditionComponent,
    // HeaderComponent,
    // FooterComponent
    FaqComponent,

   
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FooterModule,
    headerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
