import { Component, Input, input, OnInit } from '@angular/core';
import {DatePipe, NgOptimizedImage, CurrencyPipe, UpperCasePipe} from '@angular/common'
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, NgOptimizedImage, CurrencyPipe, UpperCasePipe, ListadoGenericoComponent, MatButtonModule, MatIconModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {


 title = 'angular-peliculas';
  apellido = 'Gavilán';
  edad = 39;
  duplicarNumero(valor: number): number {
    return valor * 2;
  };

  // Objeto
  pelicula = {
    titulo: 'Spider-Man',
    fechaLanzamiento: new Date(),
    precio: 1400.99
  };
  

 /* 
   Arreglos de objetos
   Importante el operador ! indica que la variable será inicializada después, 
   en este caso dentro de ngOnInit).

   @Input: Es un decorador que nos sirve para indicar que el arreglo peliculas necesita un parametro y no puede
   quedar vaciio
 */
@Input({required: true})
peliculas!: any[];

agregarPelicula(){
  this.peliculas.push({
    titulo: 'Inception',
    fechaLanzamiento: new Date('2017-07-03'),
    precio: 500,
    poster: 'https://jkfenner.com/wp-content/uploads/2019/11/default.jpg'
  });
}

remover(pelicula : any){
  const indice = this.peliculas.findIndex((peliculaActual : any) => peliculaActual.titulo === pelicula.titulo );

  this.peliculas.splice(indice, 1);
}


}
