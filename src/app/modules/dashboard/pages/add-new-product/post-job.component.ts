import { Component, OnInit } from "@angular/core";
import { NotificationService } from "src/app/shared/services/notification.service";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {
  CategoriesList,
  LocationsAllowed
} from "src/app/shared/constants/app.constants";
import { ProductService } from "src/app/shared/services/product.service";

@Component({
  selector: "app-post-job",
  templateUrl: "./post-job.component.html",
  styleUrls: ["./post-job.component.scss"]
})
export class PostJobComponent implements OnInit {
  loading = false;
  submitted = false;

  locationList = LocationsAllowed;
  categoriesList = CategoriesList;
  categories = CategoriesList;

  postJobForm: FormGroup;

 

  constructor(
    private router: Router,
    private productService : ProductService,
    private fb: FormBuilder,
    private nofication: NotificationService
  ) {
    this.createJobForm();
  }

  

  ngOnInit(): void {
    // this.description = this.postJobForm.get('description').value;
    // this.createJobForm();
    // this.jobDescription = this.jobDescription || "";
  }

  createJobForm(){
    this.postJobForm = this.fb.group({

    

      name :  ['' , [Validators.required]],
      description :  ['' , [Validators.required]],
      category :  ['' , [Validators.required]],
      // sizes : ['', Validators.required],
      // colors : [ '' , Validators.required],
      price : ['', Validators.required],
      totalQty : ['', Validators.required],
      brand : ['', Validators.required]
    })
  }

  get getControls() {
    return this.postJobForm.controls;
  }

  loadAllCategories() {}

  submit() {
    // console.log(this.postJobForm.value);
  
    this.productService.addNewProduct(this.postJobForm.value).subscribe(
      (res: any) => {
        console.log(res);

        if (res.status === "201") {
          this.nofication.notify("Job Created successfully", "success-toast");
          this.postJobForm.reset();
          this.router.navigateByUrl("/jobs");
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
