import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import {LoginComponent} from './component/login/login.component';
import {LogoutComponent} from './component/logout/logout.component';
import {FormsModule} from '@angular/forms';
import {VehicleInformationComponent} from './component/vehicle-information/vehicle-information.component';
import {InsuranceInformationComponent} from './component/insurance-information/insurance-information.component';
import {TechnicalExaminationComponent} from './component/technical-examination/technical-examination.component';
import {LandingPageComponent} from './component/landing-page/landing-page.component';
import { ToastContainerComponent } from './component/toast-container/toast-container.component';
import {NgbToastModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, VehicleInformationComponent, InsuranceInformationComponent, TechnicalExaminationComponent, LandingPageComponent, ToastContainerComponent],
    imports: [
        TranslateModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        NgbToastModule
    ],
  exports: [
    TranslateModule,
    BrowserModule,
    CommonModule,
    VehicleInformationComponent,
    InsuranceInformationComponent,
    TechnicalExaminationComponent,
    ToastContainerComponent
  ]
})
export class SharedModule {
}
