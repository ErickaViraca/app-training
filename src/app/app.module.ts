import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { PrincipalNavBarComponent } from './principal-nav-bar/principal-nav-bar.component';
import { PrincipalFooterComponent } from './principal-footer/principal-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalPageComponent,
    PrincipalNavBarComponent,
    PrincipalFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
