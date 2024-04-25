import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getData(){
    return this.http.get("https://dummyjson.com/users/1");
  }

  public getAllData() {
    return this.http.get("https://dummyjson.com/users");
  }

  public postData(){
    return 0;
  }
}
