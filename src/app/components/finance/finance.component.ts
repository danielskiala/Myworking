import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

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
  
  ngOnInit(): void {
  }

}
