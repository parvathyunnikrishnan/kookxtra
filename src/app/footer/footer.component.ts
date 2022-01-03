import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from '../privacyPolicy/privacy-policy.component';
import { SiteMapComponent } from '../siteMap/site-map.component';
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
      { path: 'site-map', component:  SiteMapComponent },
    ];