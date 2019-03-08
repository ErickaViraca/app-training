import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrincipalNavBarComponent } from './principal-nav-bar/principal-nav-bar.component';
import { PrincipalFooterComponent } from './principal-footer/principal-footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReposByUserComponent } from './repos-by-user/repos-by-user.component';
import { UsersService } from './shared/services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalNavBarComponent,
    PrincipalFooterComponent,
    UsersListComponent,
    HomePageComponent,
    ReposByUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
