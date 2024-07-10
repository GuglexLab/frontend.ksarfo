import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { DashboardComponent } from './dashboard.component';
import { PostJobComponent } from './pages/add-new-product/post-job.component';
import { ProfileComponent } from './pages/profile/profile.component';
 
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
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
