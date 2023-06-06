import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PixabayService {

  constructor(private http: HttpClient) {}
  baseURL: string = "https://pixabay.com/api/";
  apiKey : string = "37082710-5be358e7c0cb3e0aae1994447";

  getAllImages(imageName:string,imgType:string) {
    return this.http.get(`${this.baseURL}?key=${this.apiKey}&q=${imageName}&image_type=${imgType}`);
  }
}
