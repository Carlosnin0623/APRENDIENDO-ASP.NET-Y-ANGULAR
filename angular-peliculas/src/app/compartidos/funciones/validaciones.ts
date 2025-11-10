import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export function primeraLetraMayuscula(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const valor = <string>control.value;

        if (!valor) return null;


        if (valor.length === 0) return null;
        // Obteniendo la primera letra 
        const primeraLetra = valor[0];

        //Validando si la primera letra es mayuscula

        if (primeraLetra !== primeraLetra.toUpperCase()) {
            return {

                primeraLetraMayuscula: {
                    mensaje: 'La primera letra debe ser mayúscula'

                }
            }
        }

        return null;

    }


}