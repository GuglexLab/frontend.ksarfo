import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IJob } from 'src/app/shared/dto/create-job.dto';
import { ProductService } from 'src/app/shared/services/product.service';
// import { JobService } from 'src/app/shared/services/job.service';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit { 
  productInfo : any;
  SAMPLE_DATA = [];
  PRODUCTS = [];
  isLoading = false;

  constructor(
    // private jobService: JobService,
    private productService : ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const slug  = this.route.snapshot.params['slug'];

    this.productService.getProductBySlug(slug).subscribe((res : any) => {
      console.log(res);
       this.productInfo = res?.data ;  
    }) ;

    this.loadAllProducts();
  }



  loadAllProducts() {
    this.productService.getAllProductsInCatlog().subscribe((data :any) => {
      console.log(data, "")
      this.SAMPLE_DATA = data.products;
      this.isLoading = false;
    });
  }



  goto(id: any) {
    // console.log(id, "ID");
    // this.router.navigate(['product-details', id]);
    // window.location.reload();
    this.router.navigate(['product-details', id])
    .then(() => {
      window.location.reload();
      window.scrollTo(0, 0);
    });
  }

  


  renderDescription(template : any) {
    template.innerHTML = this.productInfo.jobDescription.toString();   
  }
}
