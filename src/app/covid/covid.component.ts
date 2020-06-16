import { Component , OnInit ,NgZone} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';






@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})

export class CovidComponent implements OnInit {
  x : any;
  y : any;
  sum: any = 0;
  url = 'https://api.covid19india.org/v2/state_district_wise.json'
  persons: any = [];
  dataFormat = "json"
  activ :any;
  suma = 0;
  active: any;
  recovered: any;
  sumr: any = 0;
  deceased: number;
  sumd: any  = 0;
  dailyCount:any = [];
  sumdc:number = 0;
  datatable = [];
  datatable1 = [];
  dailyconfirme: any;
  date:any = [];
  data1: { label: any; value: any; }[];
  data2: { label2: any; value2: any; }[];
  q: any = [];
  today: number;
  todaydeceased: any;
  todayrecovered: any;
  chartdata = [];
  chartdata1 = [];
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  constructor(private zone: NgZone, private http : HttpClient ) {}
   
  getData(): Observable<any> {
    return this.http.get(this.url).pipe(
      map(this.extractData)
    );
  }

  getData1(): Observable<any> {
    return this.http.get('https://api.covid19india.org/data.json').pipe(
      map(this.extractData)
    );
  }
  ngOnInit(): void {
    this.persons = [];
    this.getData().subscribe((data: any) => {
      
      this.persons = data;
      for (let i = 0; i < this.persons.length; i++) {
        this.x  = this.persons[i].districtData;
        
        for (let j = 0; j < this.x.length; j++) {
          this.y  = this.x[j].confirmed;
          this.sum = this.sum + this.y; 

          this.active  = this.x[j].active;
          this.suma = this.suma + this.active ;

          this.recovered  = this.x[j].recovered;
          this.sumr = this.sumr + this.recovered;

          this.deceased  = this.x[j].deceased;
          this.sumd = this.sumd + this.deceased; 
        }
       
        
      }   
  }); 
  this.dailyCount = [];
  this.getData1().subscribe((response: any) => {
      
    this.dailyCount = response.cases_time_series;
   console.log(this.dailyCount);
  
    for (let index = 14; index <this.dailyCount.length; index++) {
      this.dailyconfirme  = this.dailyCount[index].totalconfirmed;
     //this.date = "{ label:\"" + this.dailyCount[index].date+ "\"" + ", value:" + this.dailyCount[index].totalconfirmed + "},";
     this.date = this.dailyCount[index].date;
     this.today = this.dailyCount[this.dailyCount.length-1].dailyconfirmed;
     this.todayrecovered = this.dailyCount[this.dailyCount.length-1].dailyrecovered;
     this.todaydeceased = this.dailyCount[this.dailyCount.length-1].dailydeceased;
    this.datatable.push( ["label:" + this.date , "value: " + this.dailyconfirme]) ;
    
     
     
      //console.log(this.date);
      index = index + 13
    }
   
  });
  const chartData = this.datatable;
  console.log(this.chartdata);
 }
 
 

 dataSource = {
  chart: {
   
    entitytooltext: "$lname: ",
    showEntityHoverEffect: "1",
    entityfillhovercolor: "#FFCDD2",
    entityBorderHoverThickness: "1",
    entityBorderHovercolor:"#e60000",
    theme: "fusion"
  },
  colorrange: {
    gradient: "0",
    color: [
      {
        maxvalue: "4",
      displayvalue: "2-6",
        code: "#ffe6e6"
      },
      {
        maxvalue: "6",
        displayvalue: "4-6",
        code: "#ffcccc"
      },
      {
        maxvalue: "10",
        displayvalue: "6-10",
        code: "#ff9999"
      },
      
      {
        maxvalue: "14",
        displayvalue: "10-14",
        code: "#ff6A4D"
      },
      {
        maxvalue: "18",
        displayvalue: "14-18",
        code: "#e60000"
      }
    ]
  },
  data: [
    {
      data: [
        {
          id: "001",
          value: "2",
          
        },
        {
          id: "002",
          value: "5",
          
        },
        {
          id: "003",
          value: "2",
         
        },
        {
          id: "004",
          value: "2",
          
        },
        {
          id: "005",
          value: "2",
         
        },
       
        {
          id: "007",
          value: "2",
         
        },
        {
          id: "008",
          value: "2",
         
        },
        
        {
          id: "010",
          value: "9",
          
        },
        {
          id: "011",
          value: "2"
        },
        {
          id: "012",
          value: "11"
        },
        {
          id: "013",
          value: "2"
        },
        {
          id: "014",
          value: "2"
        },
        {
          id: "015",
          value: "2"
        },
        {
          id: "016",
          value: "2"
        },
        {
          id: "017",
          value: "2"
        },
        {
          id: "018",
          value: "2"
        },
        {
          id: "019",
          value: "2"
        },
        {
          id: "020",
          value: "9"
        },
        {
          id: "021",
          value: "15"
        },
        {
          id: "022",
          value: "2 "
        },
        {
          id: "023",
          value: "2"
        },
        {
          id: "024",
          value: "2"
        },
        {
          id: "025",
          value: "2"
        },
        {
          id: "026",
          value: "2",
         
        },
        {
          id: "027",
          value: "2",
          
        },
        {
          id: "028",
          value: "5"
        },
        {
          id: "029",
          value: "9",
         
        },
        {
          id: "030",
          value: "2"
        },
        {
          id: "031",
          value: "9",
         
        },
        {
          id: "032",
          value: "2"
        },
        {
          id: "033",
          value: "9"
        },
        {
          id: "034",
          value: "2"
        },
        {
          id: "035",
          value: "5"
        },
        {
          id: "036",
          value: "2",
          label : "Telangana"
        },
        
        
      ]
    }
  ]
};
  
 
  
dataSource1 = {
  chart: {
    caption: "All India Confirmed Cases",
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
  data :  [
     {
      label: "Feb 13",
      value: "3"
    },
    {
      label: "Mar 12",
      value: "81"
    },
    
    {
      label: "Mar 26",
      value: "730"
    },
    {
      label: "Apr 02",
      value: "2545"
    },
    {
      label: "Apr 09",
      value: "6728"
    },
    {
      label: "Apr 16",
      value: "13432"
    },
    {
      label: "Apr 23",
      value: "23040"
    },
    {
      label: "Apr 30",
      value: "34866"
    },
    
    {
      label: "May 5",
      value: "49404"
    },
  ]
};

}
