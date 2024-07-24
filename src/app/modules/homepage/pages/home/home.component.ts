import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { environment as env } from 'src/environments/environment';
// import { JobService } from 'src/app/shared/services/job.service';
 

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
  SAMPLE_DATA = [];
  PRODUCTS = PRODUCTS;
  scenes = [1, 2, 3, 4];
  currentScene = 1;
  heroBackgroundImages = [
    'url("https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/blog-posts-3-scaled-e1695291811949.jpg")',
    'url("https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/blog-posts-2-scaled-e1695291769102.jpg")',
    'url("https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/blog-post-1-scaled-e1695291695341-768x610.jpg")',
    'url("https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/blog-posts-5-scaled-e1695291899694.jpg")'
  ];

  heroTexts = [
    'HP',
    'LENOVO',
    'DELL',
    'APPLE'
  ];

  constructor(
    private authService: AuthService,
    public productService : ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.checkAuth();
    this.loadAllProducts();


    this.setCurrentSceneFromRoute();
    // this.updateHeroBackground();
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
 


  setCurrentSceneFromRoute() {
    // Example: Extract scene from route params and set this.currentScene
    // Replace with your actual logic to determine the current scene
    // For example, if using ActivatedRoute:
    // this.route.params.subscribe(params => {
    //   this.currentScene = params['id']; // Adjust based on your route structure
    // });
  }
 

 

  get heroBackgroundImage() {
    return this.heroBackgroundImages[this.currentScene - 1]; // Adjust index
  }

  get heroText() {
    return this.heroTexts[this.currentScene - 1]; // Adjust index
  }

  changeScene(scene: number) {
    this.currentScene = scene;
  }

}