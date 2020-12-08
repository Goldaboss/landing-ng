import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ThirdComponent} from './third/third.component';
import {FourthComponent} from './fourth/fourth.component';
import {FifthComponent} from './fifth/fifth.component';
import {CapabilitiesItemComponent} from './third/capabilities-item/capabilities-item.component';
import {CapabilitiesListComponent} from './third/capabilities-list/capabilities-list.component';
import {SixthComponent} from './sixth/sixth.component';
import {SixthMainComponent} from './sixth/sixth-main/sixth-main.component';
import {FooterComponent} from './footer/footer.component';
import {FirstModule} from './first/first.module';
import {SecondModule} from './second/second.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    CapabilitiesItemComponent,
    CapabilitiesListComponent,
    SixthComponent,
    SixthMainComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FirstModule,
    SecondModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
