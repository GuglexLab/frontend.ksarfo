 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 

@Injectable({
  providedIn: 'root',
})

export class CategoryService {
  private BASE_URL = `${environment.BASE_URL}/categories`; 
 
  constructor(private httpClient: HttpClient) {}

  /**
   * 
   * @returns 
   */
  getAllCategories() {
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
  findCategoriesById(categoryId : string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.get(`${this.BASE_URL}/${categoryId}`, httpOptions);
  }


  /**
   * 
   * @param companyId 
   */
  createCategory(companyData : any) {
    let payload = JSON.stringify(companyData);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.post(this.BASE_URL, payload, httpOptions);
  }

  /**
   * 
   * @param companyId 
   * @param companyData 
   */
  updateCategory(categoryId : string , companyData : any) {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient.put(this.BASE_URL + categoryId , companyData, httpOptions);
  }


  /**
   * 
   * @param jobId 
   */
  deleteCategory(categoryId : string) {
    // return this.delete(this.getUrlById(jobId));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient.delete(this.BASE_URL + categoryId, {
      ...httpOptions,
      withCredentials : true
    })

  }
}
