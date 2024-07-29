import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
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
import { CategoryService } from "src/app/shared/services/category.service";
import { BrandsService } from "src/app/shared/services/brands.service";
import { UploadServiceService } from "src/app/shared/services/upload-service.service";
import imageCompression from 'browser-image-compression';


@Component({
  selector: "app-post-job",
  templateUrl: "./post-job.component.html",
  styleUrls: ["./post-job.component.scss"]
})
export class PostJobComponent implements OnInit {
  loading = false;
  submitted = false;
  uploadedFiles : any[] = [];
  uploadError = false;
  showUploadLoader = false;
  uploadErrorMessage : string;
  

  locationList = LocationsAllowed;
  categoriesList = CategoriesList;
  categories = [];
  brands = [];
  postJobForm: FormGroup;
  isLoading : Boolean = false;
 

  constructor(
    private router: Router,
    private productService : ProductService,
    private fb: FormBuilder,
    private categoriesService : CategoryService,
    private brandsSerice : BrandsService,
    private uploadService : UploadServiceService,
    private nofication: NotificationService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {
    this.createJobForm();
  }

  

  ngOnInit(): void {
    // this.description = this.postJobForm.get('description').value;
    // this.createJobForm();
    // this.jobDescription = this.jobDescription || "";
    this.loadAllBrands();
    this.loadAllCategories();
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

  loadAllCategories() {
    this.categoriesService.getAllCategories().subscribe(
      (res: any) => {
        console.log(res);
        this.categories = res.categories;
      }
    )
  }


  loadAllBrands() {

    this.brandsSerice.getAllBrands().subscribe(
      (res: any) => {
        console.log(res);
        this.brands = res.brands;
      }
    )
  }

 
  

  onFileInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;
      if (files && files.length > 0) {
        // this.isLoading = true;
        for (let i = 0; i < files.length; i++) {
          if (files[i].size <= 7 * 1024 * 1024) {
            // this.compressImage(files[i]);

            

          } else {
            const errorMessage = `File ${files[i].name} exceeds 7MB and will not be processed.`;
            this.uploadError = true;
            this.hideErrorMessageAfterDelay(errorMessage);
          }
        }
      }
  }


  hideErrorMessageAfterDelay(errorMessage: string): void {
    this.uploadErrorMessage = errorMessage;
    this.uploadError = true;
  
    setTimeout(() => {
      this.uploadError = false;
    }, 5000);
   
  }



  async compressImage(file: File): Promise<void> {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const fileName = compressedFile.name;
      const fileAlreadyExists = this.uploadedFiles.some(file => file.name === fileName);
      if(!fileAlreadyExists){
      this.uploadService.uploadImageWithWaterMark(compressedFile).subscribe({
        next : (uploaded) =>{
          if(uploaded.status){            
            uploaded.uploadedFiles?.forEach((file, index) => {
              const formattedFile = { url: file.url }; 
              this.uploadedFiles.push(formattedFile);
            });

            this.isLoading = false;
            this._changeDetectorRef.detectChanges();
          } 
        },
        error : (error) =>{
          console.log(error, 'actual error');
          const errorMessage = `Upload failed! Please try again`;
          this.uploadError = true;
          this.hideErrorMessageAfterDelay(errorMessage);
          this._changeDetectorRef.detectChanges();
        }
      })


    }else{
      const errorMessage = `File with name ${fileName} already exists. Skipping upload.`;
      this.uploadError = true;
      this.hideErrorMessageAfterDelay(errorMessage);
      this._changeDetectorRef.detectChanges();
      this.isLoading = false; 
      // Hide loader for skipped file
    }
    } catch (error) {}
  }


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
