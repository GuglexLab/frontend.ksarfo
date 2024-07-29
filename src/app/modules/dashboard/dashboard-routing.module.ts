import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { DashboardComponent as DashboardWithSidebar } from './dashboard.component';
import { PostJobComponent } from './pages/add-new-product/post-job.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductListingComponent } from './pages/product-listing/product-listing.component';
 

const routes: Routes = [
  {
    path: '',
    component: DashboardWithSidebar,
    children: [
      {
        path: 'product-listing',
        component : ProductListingComponent
      },
      {
        path: 'add-product',
        component: PostJobComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
