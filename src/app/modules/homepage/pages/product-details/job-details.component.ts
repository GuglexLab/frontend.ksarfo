import { Component, OnInit, OnDestroy ,ChangeDetectorRef } from '@angular/core';
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
  product: any[] = [];
  products: any[] = [];
  isLoading = false;
  currentImageIndex: number = 0;
  images:  [] = [];
  
  constructor(
    // private jobService: JobService,
    private productService : ProductService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    const slug  = this.route.snapshot.params['slug'];
 
    this.getSinglePrduct(slug);
    this.loadAllProducts();
  }



  getSinglePrduct(slug: any) {
    this.productService.getProductBySlug(slug).subscribe((res : any) => {
      console.log(res, "TESTING FLOW::::");
       this.product = res?.data; 
       this.images = res.data.images;
      //  this.path = product.data.postPath;
       this.isLoading = false; 
    }) ;
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


  // changeMainImage()


  changeMainImage(index: number) {
    this.currentImageIndex = index;
    this.cdr.detectChanges();
  }



  showNextImage() {
    this.currentImageIndex = this.getNextImageIndex();
  }
  

  getPreviousImageIndex() {
    return (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  getNextImageIndex() {
    return (this.currentImageIndex + 1) % this.images.length;
  }


}
