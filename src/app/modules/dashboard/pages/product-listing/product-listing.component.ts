import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  SAMPLE_DATA = [];
  PRODUCTS = [];
  isLoading = false;

  constructor(
    public productService : ProductService,
  ) { }

  ngOnInit(): void {
    this.loadAllProducts();
  }



  loadAllProducts() {
    this.productService.getAllProductsInCatlog().subscribe((data :any) => {
      console.log(data, "")
      this.SAMPLE_DATA = data.products;
      this.isLoading = false;
    });
  }

  goto(){}


  deleteProduct(prod){
    console.log("prod", prod._id);
  }

}
