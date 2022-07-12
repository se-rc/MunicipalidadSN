import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FooterComponent } from './footer/footer.component';

import { JuzgadoPoliciaComponent } from './juzgado-policia/juzgado-policia.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APP_ROUTING } from './app.routes';
import { FonosContactoComponent } from './fonos-contacto/fonos-contacto.component';
import { NoticiasFechasComponent } from './noticias-fechas/noticias-fechas.component';
import { NoticiaComponent } from './noticias-fechas/noticia/noticia.component';
import { FechasComponent } from './noticias-fechas/fechas/fechas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FooterComponent,
    JuzgadoPoliciaComponent,
    HomeComponent,
    FonosContactoComponent,
    NoticiasFechasComponent,
    NoticiaComponent,
    FechasComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CarouselModule,
    APP_ROUTING

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
