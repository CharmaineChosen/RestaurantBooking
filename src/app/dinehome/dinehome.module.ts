import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinehomePageRoutingModule } from './dinehome-routing.module';

import { DinehomePage } from './dinehome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinehomePageRoutingModule
  ],
  declarations: [DinehomePage]
})
export class DinehomePageModule {}
