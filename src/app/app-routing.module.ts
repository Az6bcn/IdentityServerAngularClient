import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AuthCallbackComponent } from './core/auth/auth-callback/auth-callback.component';

const routes: Routes = [
  { path: '',      component: IndexComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth-callback',      component: AuthCallbackComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
