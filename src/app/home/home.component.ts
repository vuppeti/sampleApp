import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Subject} from 'rxjs';
import { Observable} from 'rxjs'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: object;
    searchTerm$ = new Subject<string>();

    constructor(private searchService: SearchService) {
        console.log('%c AppComponent', 'color: green; font-weight: bold');
        this.searchTerm$.subscribe(inputData => {
            console.log('=> searchTerm$ inputData: ', inputData);
        });
        this.searchService.search(this.searchTerm$).subscribe(results => {
            this.data= results;
            console.log('%c AppComponent', 'color: green; font-weight: bold');
            console.log('=> results: ', this.data);
        });
    }
  
  }



  