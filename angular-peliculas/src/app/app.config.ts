import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

export const appConfig: ApplicationConfig = {

  /* withComponentInputBinding(): es un servicio con el cual 
  le damos al router la funcionalidad de poder enviar datos por la url por ejemplo el id y luego poder recibirlo donde lo nencesites */
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding()), {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue : {subscriptSizing : 'dynamic'}}]
};
