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
   * Get the names of the users in alphabetic order 
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

  /**
   * Save the names of the users in a json file to download
   */
  exportToJsonFile() {
    const userNames = this.data.users.map(user => ({
      lastName: user.lastName,
      firstName: user.firstName
    }));
    const jsonData = JSON.stringify(userNames);
    
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    
    const anchor = document.createElement('a');
    anchor.download = 'user_names.json';
    anchor.href = url;
    anchor.click();
    
    window.URL.revokeObjectURL(url);
  }
}
