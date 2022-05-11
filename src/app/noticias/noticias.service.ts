import { Injectable } from '@angular/core';
import { INoticia } from './noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  noticias:INoticia[]=[
    {
      idNoticia: 1,
      categoriaNoticia:"Informativo",
      enunciadoNoticia: "Taller de grabado en San Nicolás",
      fechaNoticia: "11 de mayo de 2022",
      imagneNoticia: "https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/280533997_363182982502273_719107901937441010_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=QrfrEx3TR0UAX9kzfT-&_nc_oc=AQlkoYAIHX1T8fbkEVZV8M7S1f177F59PfMz_FKmsVZClxm2TkhTf-5EwwI0UjbaX1s&_nc_ht=scontent-scl2-1.xx&oh=00_AT8PmZmstPMI1r-lQn9Qy9e-6uHK8POy4uibWDSG7qFdUw&oe=6281844C"
  },
    {
      idNoticia: 1,
      categoriaNoticia:"Informativo",
      enunciadoNoticia: "Invitamos a la comunidad a participar de esta búsqueda, ahora en Puente Ñuble",
      fechaNoticia: "8 de mayo de 2022",
      imagneNoticia: "https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/280332437_123535200321586_9201072804940606099_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=uwZnoAVBwMQAX_R--dv&_nc_ht=scontent-scl2-1.xx&oh=00_AT9tB8eoLrMIBdBEsCf0jQg4edWxGXFkpSEZwb-cEmiJNQ&oe=6280E5CE"
  },
  {
    idNoticia: 1,
    categoriaNoticia:"Educación",
    enunciadoNoticia: "San Nicolás concientiza a estudiantes sobre tenencia responsable de mascotas",
    fechaNoticia: "1 de mayo del 2022",
    imagneNoticia: "https://elsancarlino.cl/wp/wp-content/uploads/2022/05/Charlas-760x490.jpg"
  },
    {
      idNoticia: 1,
      categoriaNoticia:"Informativo",
      enunciadoNoticia: "Hay nuevo plazo para la Operación Renta",
      fechaNoticia: "7 mayo mayo de 2022",
      imagneNoticia: "https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/279574303_361644489322789_1096802931546865341_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=OiYe6wY64koAX_8qoHA&_nc_ht=scontent-scl2-1.xx&oh=00_AT_QV7VwVqni9RXPDZlS6YW5jlKWhKrz1GQuWuM9XllS5Q&oe=62801C20"
  },
  {
    idNoticia: 1,
    categoriaNoticia:"Covid-19",
    enunciadoNoticia: "Revisa a quiénes les corresponde vacunarse esta semana entrante del 9 de mayo contra el #Covid19 ",
    fechaNoticia: "5 de abril de 2022",
    imagneNoticia: "https://scontent-scl2-1.xx.fbcdn.net/v/t39.30808-6/280346628_362904199196818_6221374926425023088_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=vj228QB0j5sAX_pTK7d&_nc_ht=scontent-scl2-1.xx&oh=00_AT_3WMXhwF5Wuk9iAIU0FFwhPml27QuFWL34csmDz1p1Sg&oe=62801410"
}
]
 
  constructor() { }
}
