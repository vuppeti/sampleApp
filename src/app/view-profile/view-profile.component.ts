import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  
  id: number;
  private sub: any;
  response:any;
  constructor( private http:HttpClient , private route: ActivatedRoute) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       
    });
    this.http.get('https://reqres.in/api/users/' + this.id)
    .subscribe((response)=> {
      this.response=response;
      
    }
    )
    
  }
  
  
}