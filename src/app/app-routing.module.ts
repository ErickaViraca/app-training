import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent }      from './users-list/users-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReposByUserComponent } from './repos-by-user/repos-by-user.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent},
  { path: 'home', component: HomePageComponent},
  {
    path: 'user/:userId',
    component: ReposByUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
