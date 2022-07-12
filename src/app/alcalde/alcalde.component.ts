import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-alcalde',
  templateUrl: './alcalde.component.html',
  styleUrls: ['./alcalde.component.css']
})
export class AlcaldeComponent implements OnInit {
  
  constructor() { 
    const myCarouselElement = document.querySelector('#myCarousel')
    const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    wrap: false
})
  }

  ngOnInit(): void {
  }

  

}
