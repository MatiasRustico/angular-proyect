import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MugicaSparesComponent } from './mugica-spares/mugica-spares.component';
import { MugicaAboutComponent } from './mugica-about/mugica-about.component';
const routes: Routes = [
  {
    path:'',
    redirectTo: 'spares',
    pathMatch: 'prefix'
  },
  {
    path:'spares',
    component: MugicaSparesComponent 
  },
  {
    path:'about',
    component: MugicaAboutComponent 
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
