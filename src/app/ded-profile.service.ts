import { Injectable , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DedProfileService implements OnInit {
  id: number;
  private sub: any;
  route: any;
  constructor( private http:HttpClient) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
      
    });
  }
  getView() {
    this.http.get('https://reqres.in/api/users?page=2' + this.id)
  }
}