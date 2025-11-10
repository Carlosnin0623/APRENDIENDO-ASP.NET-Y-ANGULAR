import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';

@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {

  private router = inject(Router);

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: ['', { validators: [Validators.required, primeraLetraMayuscula(), Validators.minLength(4), Validators.maxLength(20)] }]
  });


  obtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;

    if (nombre.hasError('required')) {
      return "El campo nombre es requerido";
    }

    if (nombre.hasError('primeraLetraMayuscula')) {
      return nombre.getError('primeraLetraMayuscula').mensaje
    }

    if (nombre.hasError('minlength')) { // ✅ debe ser "minlength" (todo en minúsculas)
      return 'El número de caracteres mínimos es 4';
    }

     if (nombre.hasError('maxlength')) { // ✅ debe ser "maxlength" (todo en minúsculas)
      return 'El número de caracteres máximos es 20';
    }

    return "";
  }

  guardarCambios() {

    // ... Guardar Cambios //

    // this.router.navigate(['/generos'])

    console.log(this.form.value)
  }

}
