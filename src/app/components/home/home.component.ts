import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  hiddeModal() {
    const modalViewer: any = document.querySelector('.modal-viewer');
    modalViewer.classList.remove('active');
  }

  showModalViewer() {
    const modalViewer: any = document.querySelector('.modal-viewer');
    modalViewer.classList.add('active');
  }

  stop(event: Event) {
    event.stopPropagation();
  }

  view:[];


   // options
   gradient: boolean = false;
   showLegend: boolean = false;
   showLabels: boolean = true;
   isDoughnut: boolean = false;
   legendPosition: any = 'right';

  colorScheme:any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  single = [
    {
      "name": "Michael doe",
      "value": 60,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "Jean robert",
      "value": 30,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "Jane doe",
      "value": 40,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "Cendric malwin",
      "value": 20,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "Holiday",
      "value": 5,
      "extra": {
        "code": "uk"
      }
    }
  ]

   // options
   showXAxis = true;
   showYAxis = true;
   linearGradient = false;
   linearShowLegend = false;
   showXAxisLabel = true;
   xAxisLabel = 'Country';
   showYAxisLabel = true;
   yAxisLabel = 'Population';
 
   linearColorScheme = {
     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
   };
 
  
  ngOnInit(): void {
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
