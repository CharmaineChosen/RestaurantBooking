import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinehomePage } from './dinehome.page';

const routes: Routes = [
  {
    path: '',
    component: DinehomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinehomePageRoutingModule {}
