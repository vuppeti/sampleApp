import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  workspace = 'https://loving-colden-f71cd8.busywork.ai/';
  jsonHeader = {headers: new HttpHeaders({
    'Content-Type':  'application/json' ,
    'Accept' : '*/*' ,
    'GIGATOKEN':  '68785625c9367bd9b4bf0a907e1c87d7fb1310492232ff0b086ad1569364bf48'
  }
    )
  };
  constructor(private http: HttpClient, private router: Router) { }

  
  getAccessToken(){
    return localStorage.getItem('user_access_token');
  }

  
  signUp(username:string, password:string){
    return this.http.post(
      this.workspace + '/sample-sign-up',
      
      JSON.stringify({
        'username': username,
        'password': password
      }),
      this.jsonHeader
    );
  }

  
  signIn(email:string, password:string){
    return this.http.post(
      'https://webservice.gigadocs.com/login/',
      
      {
        'email': email,
        'password': password         
      },                     
      this.jsonHeader
    ).subscribe(
      (result:any) => {
        
        localStorage.setItem('user_access_token', result['data']['access_token']);
       
        localStorage.setItem('userId', result['userId']);
        this.router.navigate(['usertable']);
      }
    )
  }

  
signOut(){
  return this.http.post(
    this.workspace + '/sample-sign-out',
    {},
    this.jsonHeader
  ).subscribe(
    (result:any) => {
      this.router.navigate(['signin']);
    }
  )
}

  
authenticate(){
  return this.http.post(
    this.workspace + '/sample-authenticate',
    {},
    this.jsonHeader
  );
}
}
