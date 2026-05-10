import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path: 'books', component: NavComponent},
  {path: 'bio', component: BioComponent},
  {path:'', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
