import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    TranslateModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    TranslateModule,
    BrowserModule,
    CommonModule
  ]
})
export class SharedModule {
}
