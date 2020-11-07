import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreRestaurantsPage } from './explore-restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreRestaurantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreRestaurantsPageRoutingModule {}
