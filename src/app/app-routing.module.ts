import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User } from './User';

const routes: Routes = [
  { path: 'user', component: User }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
