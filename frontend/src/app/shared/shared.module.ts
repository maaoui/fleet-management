import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import {LoginComponent} from './component/login/login.component';
import {LogoutComponent} from './component/logout/logout.component';
import {FormsModule} from '@angular/forms';
import { VehicleInformationComponent } from './component/vehicle-information/vehicle-information.component';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, VehicleInformationComponent],
  imports: [
    TranslateModule,
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    TranslateModule,
    BrowserModule,
    CommonModule,
    VehicleInformationComponent
  ]
})
export class SharedModule {
}
