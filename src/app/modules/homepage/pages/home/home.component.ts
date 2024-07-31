import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { environment as env } from 'src/environments/environment';
// import { JobService } from 'src/app/shared/services/job.service';
 

const TESTIMONIALS = [
  {
    tag : "Phone",
    name : "Phone",
    image : "https://www.apple.com/v/iphone/home/bu/images/overview/consider/personalize__f51wh6aiosya_xlarge.jpg",
    date : "1st June 2024",
    message : "I have consistently chosen KSarfo Computers for my laptop needs due to their impressive track record of quality and reliability. Every product I've purchased has been excellent, with no faults or issues. Their commitment to customer satisfaction is commendable, and I recommend them without reservation."
  },
  {
    tag : "CEO of Trenda Africa",
    name : "Samuel Acquah",
    image : "/assets/envy/photo_2024-06-10_15-49-52.jpg",
    date : "1st June 2024",
    message : "I have purchased several laptops from KSarfo Computers and have consistently been impressed with the quality of their products. Each purchase has been faultless, and I have never encountered any issues. Their commitment to providing genuine, high-quality products is evident. I wholeheartedly recommend their services to anyone in need of reliable computing solutions."
  },
  {
    tag : "Earpiece",
    name : "Prince Obeng",
    image : "https://www.apple.com/v/iphone/home/bu/images/overview/consider/innovation__b03hhgj3xx9e_xlarge.jpg",
    date : "1st June 2024",
    message : " I've had the pleasure of purchasing multiple laptops from KSarfo Computers, and each time has been a seamless experience. The products are reliable and meet high standards of quality. Their professionalism and customer support make them a top choice for technology purchases."
  },
  {
    tag : "Earpiece",
    name : "Alice Boakyewaa",
    image : "https://www.apple.com/v/iphone/home/bu/images/overview/consider/innovation__b03hhgj3xx9e_xlarge.jpg",
    date : "1st June 2024",
    message : "KSarfo Computers is a standout in the field of technology sales. Their laptops are of superb quality, and I have never faced any issues with the products I've bought. Their genuine approach and effective customer service make them highly recommendable"
  }
]


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  isLoading = false;
  jobDescription: string;
  jobListings: any = [];
  jobIdx: any;
  ASSETURL = env.ASSETURL;
  SAMPLE_DATA = [];
  TESTIMONIALS = TESTIMONIALS;
  // PRODUCTS = PRODUCTS;
  categories = [];
  
  constructor(
    private authService: AuthService,
    public productService : ProductService,
    private categoriesService : CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.checkAuth();
    this.loadAllProducts();
    this.loadAllCategories();

 
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
 

  loadAllCategories() {
    this.categoriesService.getAllCategories().subscribe(
      (res: any) => {
        console.log(res);
        this.categories = res.categories;
      }
    )
  }

 

 
}