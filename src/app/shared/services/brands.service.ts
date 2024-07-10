 

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  private BASE_URL = `${environment.BASE_URL}/brands`; 
 
  constructor(private httpClient: HttpClient) {}

  /**
   * 
   * @returns 
   */
  getAllBrands() {
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
  findBrandById(companyId : string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.get(`${this.BASE_URL}/${companyId}`, httpOptions);
  }


  /**
   * 
   * @param companyId 
   */
  addNewBrand(companyData : any) {
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
  updateBrand(companyId : string , companyData : any) {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient.put(this.BASE_URL + companyId , companyData, httpOptions);
  }


  /**
   * 
   * @param jobId 
   */
  deeletBrand(companyId : string) {
    // return this.delete(this.getUrlById(jobId));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient.delete(this.BASE_URL + companyId, {
      ...httpOptions,
      withCredentials : true
    })

  }
}
