import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-genero',
  imports: [],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {

  /* De esta forma es que se recibe los valores de una url usando angular, ojo el nombre de la variable debe ser igual al que envia la 
    por la URL: generos/editar/:id  como ves envia el id , entonces debemos crear una variable llamada id igual para que reciba
    el dato
  
  */
  @Input({transform: numberAttribute})
  id!: number
}
