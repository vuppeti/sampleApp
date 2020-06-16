import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable , of } from 'rxjs';
import {map} from 'rxjs/operators';
import { debounceTime} from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/operators';
import {switchMap} from 'rxjs/operators';
import { HttpParams, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl: string = 'https://api.cdnjs.com/libraries';
  queryUrl: string = '?search=';
  public searchResults: any;

  constructor(private http: HttpClient) {}

  search(terms: Observable<string>): any {
      console.log('%c SearchService', 'color: green; font-weight: bold');
      console.log(
          '%c search(terms: Observable<string>)',
          'color: red; font-weight: bold'
      );
      return terms.pipe(
          // debounceTime(400): waits until there’s no new data for the provided amount of time
          debounceTime(400),
          // distinctUntilChanged():
          //      will ensure that only distinct data passes through
          //      will only send the data once
          distinctUntilChanged(),
          // switchMap():
          //      combines multiple possible observables received from the searchEntries method into one,
          //      which ensures that we use the results from the latest request only.
          switchMap((term: string) => this.searchEntries(term))
      );
  }

  // searchEntries(term): makes a get request to our API endpoint with our search term, this gives us another observable
  searchEntries(term: string): Observable<object> {
      console.log(
          '%c searchEntries(terms: string)',
          'color: red; font-weight: bold'
      );
      console.log('=> term: ', term);
      if (term === '') {
          return of({});
      }
      // Create the request url with search term in the query params
      // Example: url = https://api.cdnjs.com/libraries?search=filter
      const url = `${this.baseUrl}${this.queryUrl}${term}`;
      console.log('=> url: ', url);
      return this.http.get(url);
  }
}
