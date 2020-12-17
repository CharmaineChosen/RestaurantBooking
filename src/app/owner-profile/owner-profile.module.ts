import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerProfilePageRoutingModule } from './owner-profile-routing.module';

import { OwnerProfilePage } from './owner-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnerProfilePageRoutingModule
  ],
  declarations: [OwnerProfilePage]
})
export class OwnerProfilePageModule {}
