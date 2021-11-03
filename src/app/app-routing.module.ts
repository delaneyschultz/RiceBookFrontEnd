import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IndexComponent} from "./auth/index.component";
import {MainComponent} from "./main/main.component";
import {ProfileComponent} from "./profile/profile.component";


const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'main', component:MainComponent},
  {path: 'profile', component:ProfileComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
