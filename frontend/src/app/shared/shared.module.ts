import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    BrowserModule
  ],
  exports: [
    TranslateModule,
    BrowserModule,
    CommonModule
  ]
})
export class SharedModule {
}
