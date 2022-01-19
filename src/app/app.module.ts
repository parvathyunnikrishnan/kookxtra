import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './aboutUs/about-us.component';
import { ContactFormComponent } from './contactForm/contact-form.component';
import { ContactUsComponent } from './contactUs/contact-us.component';
import { PrivacyPolicyComponent } from './privacyPolicy/privacy-policy.component';

import {TermsAndConditionComponent } from './termsAndCondition/terms-and-condition.component';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterModule} from './footer/footer.module'
import { headerModule } from './header/header.module'
import { FaqComponent } from './faq/faq.component';
import { BecomeACookComponent } from './becomeACook/become-a-cook.component';
import {CopyrightComponent } from './copyright/copyright.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about-us', component:AboutUsComponent},
  { path: 'contact-form', component:  ContactFormComponent },
  { path: 'contact-us', component:  ContactUsComponent },
  { path: 'privacy-policy', component:  PrivacyPolicyComponent },
  { path: 'terms-and-condition', component: TermsAndConditionComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'become-a-cook', component: BecomeACookComponent },
  { path: 'copyright', component:  CopyrightComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactFormComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    CopyrightComponent,
    TermsAndConditionComponent,
    // HeaderComponent,
    // FooterComponent
    FaqComponent,
    BecomeACookComponent

   
  
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
