import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecondComponent} from './components/second.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import {AdvantageComponent} from './components/main/advantage/advantage.component';



@NgModule({
  declarations: [
    SecondComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AdvantageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SecondComponent,
  ]
})
export class SecondModule {
}
