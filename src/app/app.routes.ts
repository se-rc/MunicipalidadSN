import { RouterModule, Routes } from '@angular/router';
import { JuzgadoPoliciaComponent } from './juzgado-policia/juzgado-policia.component';
import { HomeComponent } from './home/home.component';
import { FonosContactoComponent } from './fonos-contacto/fonos-contacto.component';

const APP_ROUTES:Routes=[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'juzgado',
    component:JuzgadoPoliciaComponent
  },
  {
    path:'contacto',
    component:FonosContactoComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);
