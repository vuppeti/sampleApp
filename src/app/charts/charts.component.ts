import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  
  dataSource : any;
  dataSource1 : any;
  dataSource2 : any;
  selectedObject;
  selectedState;
  statesDaily: any;
  dailyCount:any = [];
  sumdc:number = 0;
  datatable:any = [];
  datatable1:any = [];
  datatable2:any = [];
  datatable3:any = [];
  deceasedData:any = [];
  dailyconfirme: any;
  date:any;
  data:any = [];
  persons: any = [];
  q: any = [];
  today: number;
  todaydeceased: any;
  todayrecovered: any;
  chartdata = [];
  lastdate: any;
  lastdateConfirmed: any;
  dailyCount1: any;
  d: any;
  selectedState1: string;
  handleChange(k) {
  
    this.selectedObject = this.datatable1[k];
    this.selectedState = this.selectedObject.statecode;
   this.selectedState1 = this.selectedState.toLowerCase( )
    console.log(this.selectedState1);
    
    this.datatable2.splice(0,this.datatable2.length);
    this.datatable3.splice(0,this.datatable3.length);
    this.deceasedData.splice(0,this.deceasedData.length);
        for( let index = 0 ; index < 198 ; index++){
          if(this.statesDaily[index].status == this.statesDaily[0].status){
          this.datatable2.push({label: this.statesDaily[index].date , value : this.statesDaily[index][this.selectedState1]  });
          //index = index +13;
          }
          else if(this.statesDaily[index].status == this.statesDaily[1].status){
            this.datatable3.push({label: this.statesDaily[index].date , value : this.statesDaily[index][this.selectedState1]  });
            //index = index +13;
            }
          else if(this.statesDaily[index].status == this.statesDaily[2].status){
              this.deceasedData.push({label: this.statesDaily[index].date , value : this.statesDaily[index][this.selectedState1]  });
              //index = index +13;
              }  

           }
    console.log(this.datatable3)
  }
  
  constructor(private apiService: ApiService , private zone: NgZone , private http: HttpClient) { }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getData1(): Observable<any> {
    return this.http.get('https://api.covid19india.org/states_daily.json').pipe(
      map(this.extractData)
    );
  }
  ngOnInit(): void {
    
    this.getData1().subscribe((data: any) =>  {
      
      this.statesDaily = data.states_daily;
      //console.log(this.statesDaily);
      
      
    });


    this.apiService.getData().subscribe((response: any) => {
    this.dailyCount = response.cases_time_series;
    this.dailyCount1 = response.statewise;
    console.log(this.dailyCount);
    for (let j = 43; j <this.dailyCount.length; j++) {
      this.datatable3.push({label: this.dailyCount[j].date , value: this.dailyCount[j].totalrecovered})
      this.deceasedData.push({label: this.dailyCount[j].date , value: this.dailyCount[j].totaldeceased})
      this.datatable2.push({label: this.dailyCount[j].date , value: this.dailyCount[j].totalconfirmed})
      this.lastdate = this.dailyCount[this.dailyCount.length-1].date;
      this.lastdateConfirmed = this.dailyCount[this.dailyCount.length-1].totalconfirmed
      j = j + 6
    }
    this.datatable2.push({label: this.lastdate , value: this.lastdateConfirmed})
    console.log(this.datatable2)

    for(let i = 0; i <this.dailyCount1.length; i++) {
       
      this.datatable1.push({label: this.dailyCount1[i].state , statecode: this.dailyCount1[i].statecode});
     
      }
      console.log(this.datatable1)
  });
 
 
  this.dataSource = {
    chart: {
      caption: "Confirmed Cases",
      "showBorder": "10",
      anchorradius: "10",
      plottooltext: "Number of cases <b>$dataValue</b>",
      showhovereffect: "1",
      showvalues: "0",
      numbersuffix: "",
      theme: "fusion",
      anchorbgcolor: "#850000",
      palettecolors: "#850000"
    },
    
    data :this.datatable2
  } 
  this.dataSource1 = {
    chart: {
      caption: "Recovered Cases",
      "showBorder": "10",
      anchorradius: "10",
      plottooltext: "Number of cases <b>$dataValue</b>",
      showhovereffect: "1",
      showvalues: "0",
      numbersuffix: "",
      theme: "fusion",
      anchorbgcolor: "#850000",
      palettecolors: "#850000"
    },
    
    data :this.datatable3
  } 
  this.dataSource2 = {
    chart: {
      caption: "Deceased",
      "showBorder": "10",
      anchorradius: "10",
      plottooltext: "Number of cases <b>$dataValue</b>",
      showhovereffect: "1",
      showvalues: "0",
      numbersuffix: "",
      theme: "fusion",
      anchorbgcolor: "#850000",
      palettecolors: "#850000"
    },
    
    data :this.deceasedData
  } 
  //this.dataSource.data = this.datatable;
  console.log(this.dataSource.data);
  } 
  selectedLabel = "";
  selectedValue = "";
update($event) {
  // Run inside angular context
  this.zone.run(() => {
    this.selectedLabel = $event.dataObj.categoryLabel;
    this.selectedValue = $event.dataObj.displayValue;
  })
}

}
