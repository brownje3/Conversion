import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { LinksComponent } from './links/links.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path: 'main', component: NavComponent},
  {path: 'bio', component: BioComponent},
  {path: 'link', component: LinksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
