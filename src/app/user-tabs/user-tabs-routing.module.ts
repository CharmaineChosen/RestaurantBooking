import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTabsPage } from './user-tabs.page';


const routes: Routes = [
  {
    path: '',
    component: UserTabsPage,
    children: [
      {
        path: 'explore-restaurants',
        loadChildren: () => import('../explore-restaurants/explore-restaurants.module').then( m => m.ExploreRestaurantsPageModule)
      },
      {
        path: 'booking-details',
        loadChildren: () => import('../booking-details/booking-details.module').then( m => m.BookingDetailsPageModule)
      },
      {
        path: 'my-user-profile',
        loadChildren: () => import('../my-user-profile/my-user-profile.module').then( m => m.MyUserProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/explore-restaurants',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTabsPageRoutingModule {}
