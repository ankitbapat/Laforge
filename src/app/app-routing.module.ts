import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopUpComponent } from './pop-up/pop-up.component';


const routes: Routes = [
  { path: 'pop-up', component: PopUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
