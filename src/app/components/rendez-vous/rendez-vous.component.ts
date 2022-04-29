import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  constructor() { }

  showModal() {
    const modal: any = document.querySelector('.modal');
    modal.classList.add('active');

  }

  hiddeModal() {
    const modal: any = document.querySelector('.modal');
    const modalViewer: any = document.querySelector('.modal-viewer');
    modal.classList.remove('active');
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
