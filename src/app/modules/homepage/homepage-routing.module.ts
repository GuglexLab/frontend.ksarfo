import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'job-details/:id', component: JobDetailsComponent },
    // { path: '**', component: PagenotfoundComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
