 

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



// app.use("/api/v1/users/", userRoutes);
// app.use("/api/v1/products/", productsRouter);
// app.use("/api/v1/categories/", categoriesRouter);
// app.use("/api/v1/brands/", brandsRouter);
// app.use("/api/v1/colors/", colorRouter);
// app.use("/api/v1/reviews/", reviewRouter);
// app.use("/api/v1/orders/", orderRouter);
// app.use("/api/v1/coupons/", couponsRouter);



@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private BASE_URL = `${environment.BASE_URL}/products`; 
 
  constructor(private httpClient: HttpClient) {}

  /**
   * 
   * @returns 
   */
  getAllProductsInCatlog() {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpClient.get(this.BASE_URL , httpOptions);
  }

  /**
   * 
   * @param companyId 
   * @returns 
   */
  getAllProductsInCatlogById(companyId : string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.get(`${this.BASE_URL}/${companyId}`, httpOptions);
  }




  getProductBySlug(slug : string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.get(`${this.BASE_URL}/info/${slug}`, httpOptions);
  }


  
   /**
   * 
   * @param companyId 
   * @returns 
   */
   getAllProductsInCatlogBySlug(slug : string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.get(`${this.BASE_URL}/${slug}`, httpOptions);
  }


  /**
   * 
   * @param companyId 
   */
  addNewProduct(companyData : any) {
    let payload = JSON.stringify(companyData);
    const token = localStorage.getItem('currentUser');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpClient.post(this.BASE_URL, payload, httpOptions);
  }

  /**
   * 
   * @param companyId 
   * @param companyData 
   */
  updateProduct(companyId : string , companyData : any) {
    const token = localStorage.getItem('currentUser');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.httpClient.put(`${this.BASE_URL}/` + companyId , companyData, httpOptions);
  }


  /**
   * 
   * @param jobId 
   */
  deleteProduct(productId : string) {
     const token = localStorage.getItem('currentUser');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.httpClient.delete(`${this.BASE_URL}/` + productId + "/delete", {
      ...httpOptions
    })

  }
}
