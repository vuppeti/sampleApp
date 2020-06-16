import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map-charts',
  templateUrl: './map-charts.component.html',
  styleUrls: ['./map-charts.component.css']
})
export class MapChartsComponent implements OnInit {
  dailyCount: any =[];
  datatable:any = [];
  dataSource : any;
  events: any ;
  chart: any;
  
  id1=[1,2,3,4,5,6,7,10/*,{8,9}*/,11,12,14,13,16,15,17,18,'Ladak',19,21,23,22,20,24,25,26,28,27,29,30,36,31,32,33,34,35 ]
  constructor(private apiService: ApiService , private zone: NgZone) { 
    
  }

  ngOnInit(): void {
    
    this.apiService.getData().subscribe((response: any) => {
      
      this.dailyCount = response.statewise;
      console.log(this.dailyCount);
      for (let index = 1; index <this.dailyCount.length; index++) {
       
        this.datatable.push({label: this.dailyCount[index].state , value: this.dailyCount[index].confirmed});
        }
      console.log(this.datatable)
  });

  this.dataSource = {
    chart: {
      
      entitytooltext: "$lName:" + "$value" ,
      showEntityHoverEffect: "1",
      entityfillhovercolor: "#FFCDD2",
      entityBorderHoverThickness: "1",
      entityBorderHovercolor:"#e60000",
      theme: "fusion",
      showToolTip: "1",
      formatNumberScale: "0", 
       
    },
    
    colorrange: {
     
      color: [
        {
          
          maxvalue: "100",
          code: "#D0DFA3",
          displayValue: "< 100M"
      },
      {
         
          maxvalue: "10000",
          code: "#B0BF92",
          displayValue: "100-500M"
      },
      {
         
          "maxvalue": "1000",
          "code": "#91AF64",
          "displayValue": "500M-1B"
      },
      {
          
          "maxvalue": "5000",
          "code": "#A9FF8D",
          "displayValue": "> 1B"
      }
  ]
},
      
    data :[
     this.datatable
    ]
    
  }  
  
  console.log(this.dataSource.data)
}
initialized($event){
  this.chart = $event.chart; // saving chart instance

} 


}