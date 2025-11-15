import { Component } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import {LeafletModule} from '@bluehalo/ngx-leaflet';

@Component({
  selector: 'app-mapa',
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {

  options = {
    layers : [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom: 18,
        attribution: '...'
      })
    ],
    zoom: 14,
    center: latLng(18.47318704338643, -69.93441088477327)
  }
}
