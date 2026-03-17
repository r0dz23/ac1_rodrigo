import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Media } from './media/media';
import { Apolice } from './apolice/apolice';
import { Temperatura } from './temperatura/temperatura';
import { Imc } from './imc/imc';

const routes: Routes = [
  { path: 'media', component: Media },
  { path: 'apolice', component: Apolice },
  { path: 'temperatura', component: Temperatura },
  { path: 'imc', component: Imc },
  { path: '', redirectTo: '/media', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
