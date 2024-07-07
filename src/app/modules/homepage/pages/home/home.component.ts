import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { JobService } from 'src/app/shared/services/job.service';

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

  SAMPLE_DATA = SAMPLE_DATA;
  PRODUCTS = PRODUCTS;

  constructor(
    private jobService: JobService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    // this.loadAllJobs();
    this.checkAuth();
  }

  loadAllJobs() {
    this.jobService.getAllJobs().subscribe((jobs) => {
      this.jobListings = jobs;
      // this.isLoading = false;
    });
  }

  checkAuth() {
   this.authService.isAuthenticated();
  }

  getJobDetails(id: any) {
    this.router.navigate(['job-details', id]);
  }
}