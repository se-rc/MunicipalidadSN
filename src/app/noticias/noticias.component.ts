import { Component, OnInit } from '@angular/core';
import { INoticia } from './noticia';
import { NoticiasService } from './noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  
  constructor(public dataNoticias: NoticiasService) { }

  noticias:INoticia[]=this.dataNoticias.noticias;

  ngOnInit(): void {
  }

}
