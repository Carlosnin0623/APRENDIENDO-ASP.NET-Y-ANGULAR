import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { fechaNoPuedeSerFutura, primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import moment from 'moment';

@Component({
  selector: 'app-formulario-actores',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  private formBuilder = inject(FormBuilder);

  @Input()
  modelo: ActorDTO | undefined;

  @Output()
  posteoFormulario = new EventEmitter<ActorCreacionDTO>();


  form = this.formBuilder.group({
    nombre: ['', { validators: [Validators.required, primeraLetraMayuscula()] }],
    fechaNacimiento: new FormControl<Date | null>(null, {
      validators: [Validators.required, fechaNoPuedeSerFutura()]
    })
  });


 // Errores en campos

  obtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;

    if (nombre.hasError('required')) {
      return "El campo nombre es requerido";
    }

    if (nombre.hasError('primeraLetraMayuscula')) {
      return nombre.getError('primeraLetraMayuscula').mensaje
    }

    return "";
  }

  obtenerErrorCampoFechaNacimiento(): string{
    let campo = this.form.controls.fechaNacimiento;

     if (campo.hasError('required')) {
      return "El campo Fecha Nacimiento es requerido";
    }

    if(campo.hasError('futuro')){
      return campo.getError('futuro').mensaje;
    }

    return "";
  }


  guardarCambios() {
    if (!this.form.valid) {
      return;
    }

    const actor = this.form.value as ActorCreacionDTO;
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();
    this.posteoFormulario.emit(actor);
  }
}
