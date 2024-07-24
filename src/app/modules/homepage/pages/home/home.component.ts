import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { environment as env } from 'src/environments/environment';
// import { JobService } from 'src/app/shared/services/job.service';

const SAMPLE_DATA = [
  {
    tag : "Phone",
    image : "/assets/envy/photo_2024-06-10_15-49-49.jpg",
    date : "1st June 2024",
    title : "HP Gaming Laptop. Performance testinig for Speed and strength"
  },
  {
    tag : "Laptop",
    image : "/assets/envy/photo_2024-06-10_15-49-52.jpg",
    date : "1st June 2024",
    title : " HP Gaming Laptop. Performance testinig for Speed and strength"
  },
  {
    tag : "Earpiece",
    image : "/assets/envy/photo_2024-06-10_15-49-52.jpg",
    date : "1st June 2024",
    title : " HP Gaming Laptop. Performance testinig for Speed and strength"
  },
  {
    tag : "Earpiece",
    image : "/assets/envy/photo_2024-06-10_15-49-52.jpg",
    date : "1st June 2024",
    title : " HP Gaming Laptop. Performance testinig for Speed and strength"
  },
 
  {
    tag : "Earpiece",
    image : "/assets/envy/photo_2024-06-10_15-49-52.jpg",
    date : "1st June 2024",
    title : " HP Gaming Laptop. Performance testinig for Speed and strength"
  },
  {
    tag : "Software",
    image : "/assets/envy/photo_2024-06-10_15-49-52.jpg",
    date : "1st June 2024",
    title : " HP Gaming Laptop. Performance testinig for Speed and strength"
  },
  {
    tag : "Software",
    image : "/assets/envy/photo_2024-06-10_15-49-52.jpg",
    date : "1st June 2024",
    title : " HP Gaming Laptop. Performance testinig for Speed and strength"
  },
  {
    tag : "Software",
    image : "/assets/envy/photo_2024-06-10_15-49-52.jpg",
    date : "1st June 2024",
    title : " HP Gaming Laptop. Performance testinig for Speed and strength"
  },

]




const PRODUCTS = [
  {
    tag : "Phone",
    image : "https://www.apple.com/v/iphone/home/bu/images/overview/consider/personalize__f51wh6aiosya_xlarge.jpg",
    date : "1st June 2024",
    title : "HP Gaming Laptop. Performance testinig for Speed and strength"
  },
  {
    tag : "Laptop",
    image : "/assets/envy/photo_2024-06-10_15-49-52.jpg",
    date : "1st June 2024",
    title : " HP Gaming Laptop. Performance testinig for Speed and strength"
  },
  {
    tag : "Earpiece",
    image : "https://www.apple.com/v/iphone/home/bu/images/overview/consider/innovation__b03hhgj3xx9e_xlarge.jpg",
    date : "1st June 2024",
    title : " HP Gaming Laptop. Performance testinig for Speed and strength"
  },
  {
    tag : "Earpiece",
    image : "https://www.apple.com/v/iphone/home/bu/images/overview/consider/innovation__b03hhgj3xx9e_xlarge.jpg",
    date : "1st June 2024",
    title : " HP Gaming Laptop. Performance testinig for Speed and strength"
  }
]


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  jobDescription: string;
  jobListings: any = [];
  jobIdx: any;
  ASSETURL = env.ASSETURL;
  currentSlide = 0;
  images = [
    'https://trenda-production-uploads.s3.eu-north-1.amazonaws.com/uploads/c443861e-a084-407b-9a99-ba6a6903a95f-photo_2024-06-10_23-27-16.jpg',
    '/assets/envy/photo_2024-06-10_15-49-49.jpg',
    '/assets/envy/photo_2024-06-10_15-49-49.jpg'
];

  SAMPLE_DATA = [];
  PRODUCTS = PRODUCTS;

  constructor(
    private authService: AuthService,
    public productService : ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.checkAuth();
    this.loadAllProducts();
  }

  get sliderTransform() {
    return `translateX(-${this.currentSlide * 100}%)`;
}

  loadAllProducts() {
    this.productService.getAllProductsInCatlog().subscribe((data :any) => {
      console.log(data, "")
      this.SAMPLE_DATA = data.products;
      this.isLoading = false;
    });
  }

  checkAuth() {
   this.authService.isAuthenticated();
  }

  goto(id: any) {
    console.log(id, "ID");
    this.router.navigate(['product-details', id]);
  }


  // getImageUrl(imagePath: string): string {
  //   return `${this.ASSETURL}${imagePath}`;
  // }

  getImageUrl(imagePath: string): string {
    return `${this.ASSETURL}/${imagePath}`;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : this.images.length - 1;
}



nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
}

}