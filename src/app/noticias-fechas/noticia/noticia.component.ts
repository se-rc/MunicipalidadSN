import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: true, showIndicators: true } }
  ]
})
export class NoticiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
