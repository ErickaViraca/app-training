import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalNavBarComponent } from './principal-nav-bar/principal-nav-bar.component';
import { PrincipalFooterComponent } from './principal-footer/principal-footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalNavBarComponent,
    PrincipalFooterComponent,
    UsersListComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
