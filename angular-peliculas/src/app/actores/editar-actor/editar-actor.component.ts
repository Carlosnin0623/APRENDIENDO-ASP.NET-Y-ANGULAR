import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-actor',
  imports: [],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {

  
  /* De esta forma es que se recibe los valores de una url usando angular, ojo el nombre de la variable debe ser igual al que envia la 
    por la URL: actores/editar/:id  como ves envia el id , entonces debemos crear una variable llamada id igual para que lo reciba
    el dato
  
  */
  @Input({transform: numberAttribute})
  id!: number
}
