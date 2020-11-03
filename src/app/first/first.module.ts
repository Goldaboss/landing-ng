import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstComponent} from './components/first.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    FirstComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstComponent,
  ]
})
export class FirstModule {
}

