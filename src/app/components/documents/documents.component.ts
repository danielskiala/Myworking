import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  showModal() {
    const modal: any = document.querySelector('.modal');
    modal.classList.add('active');

  }

  hiddeModal() {
    const modal: any = document.querySelector('.modal');
    modal.classList.remove('active');
  }


  stop(event: Event) {
    event.stopPropagation();
  }

  ngOnInit(): void {
  }

}
