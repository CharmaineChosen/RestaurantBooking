import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreRestaurantsPageRoutingModule } from './explore-restaurants-routing.module';

import { ExploreRestaurantsPage } from './explore-restaurants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreRestaurantsPageRoutingModule
  ],
  declarations: [ExploreRestaurantsPage]
})
export class ExploreRestaurantsPageModule {}
