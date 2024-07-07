import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { LoaderComponent } from '../components/loader/loader.component';
// import { PrimeNgModule } from 'src/app/primeNg.module';


@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    // PrimeNgModule
    MaterialModule
  ],
  providers: [],
  exports: [LoaderComponent] 
})

export class SharedModule { }
