import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyDishesPage } from './daily-dishes.page';

const routes: Routes = [
  {
    path: '',
    component: DailyDishesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyDishesPageRoutingModule {}
