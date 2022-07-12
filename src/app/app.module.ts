import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { JuzgadoPoliciaComponent } from './juzgado-policia/juzgado-policia.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APP_ROUTING } from './app.routes';
import { FonosContactoComponent } from './fonos-contacto/fonos-contacto.component';
import { AlcaldeComponent } from './alcalde/alcalde.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FooterComponent,
    NoticiasComponent,
    JuzgadoPoliciaComponent,
    HomeComponent,
    FonosContactoComponent,
    AlcaldeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    APP_ROUTING

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
