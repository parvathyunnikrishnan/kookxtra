import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from '../privacyPolicy/privacy-policy.component';
import {CopyrightComponent } from '../copyright/copyright.component';
import { TermsAndConditionComponent } from '../termsAndCondition/terms-and-condition.component';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
  })
  export class FooterComponent {
  

}
const routes: Routes = [

      { path: 'privacy-policy', component:  PrivacyPolicyComponent },
      { path: 'terms-and-condition', component: TermsAndConditionComponent },
      { path: 'copyright', component:  CopyrightComponent }
     /* { path: 'site-map', component:  SiteMapComponent },*/
    ];