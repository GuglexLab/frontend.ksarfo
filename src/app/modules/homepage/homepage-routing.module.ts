import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/job-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product-details/:slug', component: ProductDetailsComponent },
    // { path: '**', component: PagenotfoundComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
