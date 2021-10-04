import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExtComponent} from './components/ext/ext.component';

const routes: Routes = [
  {path: '', component: ExtComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
