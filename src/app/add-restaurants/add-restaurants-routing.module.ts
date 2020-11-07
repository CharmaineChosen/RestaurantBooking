import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRestaurantsPage } from './add-restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: AddRestaurantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRestaurantsPageRoutingModule {}
