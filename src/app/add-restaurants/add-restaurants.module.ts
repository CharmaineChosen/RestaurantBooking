import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRestaurantsPageRoutingModule } from './add-restaurants-routing.module';

import { AddRestaurantsPage } from './add-restaurants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRestaurantsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddRestaurantsPage]
})
export class AddRestaurantsPageModule {}
