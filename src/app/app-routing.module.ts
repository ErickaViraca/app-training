import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent }      from './users-list/users-list.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent},
  { path: 'home', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
