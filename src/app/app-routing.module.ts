import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'sobremi', component: SobremiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
