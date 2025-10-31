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
export class AppComponent  {
  
}


