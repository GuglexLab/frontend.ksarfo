import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  private apiUrl = environment.UPLOAD_URL;

  constructor(private http: HttpClient) {}
  
    // production build
    uploadImageWithWaterMark(file: File): Observable<any> {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      const headers = new HttpHeaders({'Authorization': 'Bearer '});
      return this.http.post(`${this.apiUrl}/upload-no-watermark`, formData, { headers });
    }

}
