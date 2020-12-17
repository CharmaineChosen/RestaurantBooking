import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyUserProfilePageRoutingModule } from './my-user-profile-routing.module';

import { MyUserProfilePage } from './my-user-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyUserProfilePageRoutingModule
  ],
  declarations: [MyUserProfilePage]
})
export class MyUserProfilePageModule {}
