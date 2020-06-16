import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  /*jsonHeader = {headers: new HttpHeaders({
    'GIGATOKEN':  '68785625c9367bd9b4bf0a907e1c87d7fb1310492232ff0b086ad1569364bf48' ,
    
    'Content-Type': 'application/json'
  }
  )
};*/
  //url = 'https://webservice.gigadocs.com/search/suggestionsarea/';
  url = 'https://api.covid19india.org/data.json'
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getData(): Observable<any> {
    return this.http.get( this.url).pipe( //, this.jsonHeader).pipe(
      map(this.extractData)
    );
  }
}

