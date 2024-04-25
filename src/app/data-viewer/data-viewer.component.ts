import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrl: './data-viewer.component.css'
})
export class DataViewerComponent {

  data: any; 
  lastNames: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.fetchData();
  }

  /**
   * Get lastnames of the users
   */
  fetchData() {
    this.dataService.getAllData().subscribe(response => {
      this.data = response;

      if (this.data && this.data.users) {
        this.data.users.sort((a, b) => {
          if (a.lastName < b.lastName) {
            return -1;
          }
          if (a.lastName > b.lastName) {
            return 1;
          }
          return 0;
        });
      }
  
      console.log(this.data.users)
    });
  }
}
