import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyDishesPageRoutingModule } from './daily-dishes-routing.module';

import { DailyDishesPage } from './daily-dishes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyDishesPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [DailyDishesPage]
})
export class DailyDishesPageModule {}
