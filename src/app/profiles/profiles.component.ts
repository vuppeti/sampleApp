import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

 

  persons: any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.persons = [];
    this.apiService.getData().subscribe((data: any) => {
      
      this.persons = data;
      console.log(this.persons)
    });
    
  }
  
    
  
}
