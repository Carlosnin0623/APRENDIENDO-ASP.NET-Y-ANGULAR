import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';


@Component({
  selector: 'app-root',
  /* Los Pipes son funciones ya creadas en Angular para facilitarnos el desarrollo 
   
   DatePipe: Es una funcion para manejar fechas.
   UpperCasePipe: Es una funcion que pone en mayusculas un texto.
   CurrencyPipe: Es una funcion para poner el tipo de moneda
   NgFor: Si queremos recorrer con la directiva anterior que usaba Angular es bueno conocerla
  
  */
  imports: [ListadoPeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [{
        titulo: 'Inside Out 2',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'
      },
      {
        titulo: 'Moana 2',
        fechaLanzamiento: new Date('2016-05-03'),
        precio: 300.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
      },
      {
        titulo: 'Bad Boys: Ride or Die',
        fechaLanzamiento: new Date('2016-05-03'),
        precio: 300.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
      }];

      this.peliculasProximosEstrenos = [
        {
          titulo: 'Deadpool & Wolverine',
          fechaLanzamiento: new Date('2016-05-03'),
          precio: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'
        },
        {
          titulo: 'Oppenheimer',
          fechaLanzamiento: new Date('2016-05-03'),
          precio: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg'
        },
        {
          titulo: 'The Flash',
          fechaLanzamiento: new Date('2016-05-03'),
          precio: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'
        }
      ];

    }, 2000)
  }

  peliculasEnCines!: any[];
  peliculasProximosEstrenos!: any[];

  clickBoton(){
    alert("Haz hecho click en el botón");
  }
}


