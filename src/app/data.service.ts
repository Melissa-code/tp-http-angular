import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  /**
   * Get data about the user_id 1
   * 
   * @returns 
   */
  public getData(){
    return this.http.get("https://dummyjson.com/users/1");
  }

  /**
   * Get data about all the users 
   * 
   * @returns 
   */
  public getAllData() {
    return this.http.get("https://dummyjson.com/users");
  }

  public postData(){
    return 0;
  }
}
