import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

   /*  Funciones Transformadoras
   
     Transform: permite transormar el tipo de dato que recibimos a otro
     como vemos estamos convirtiendo de un numero a un array numerico
   
   */
  @Input({required: true, transform : (valor : number) => Array(valor).fill(0)})
  maximoRating!: number[];

  @Input()
  ratingSeleccionado = 0;

  @Output()
  votado = new EventEmitter<number>();

  ratingAnterior = 0;

  manejarMouseEnter(indice: number){
    this.ratingSeleccionado = indice + 1;
  }

   manejarMouseLeave(){
    if(this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    }else{
      this.ratingSeleccionado = 0;
    }
  }

  manejarClick(indice : number){
    this.ratingSeleccionado = indice + 1;
    this.ratingAnterior = this.ratingSeleccionado;
    this.votado.emit(this.ratingSeleccionado);
  }
}
