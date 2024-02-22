import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'wedding-dialog-salon',

  templateUrl: './dialog-salon.component.html',
  styleUrls: ['./dialog-salon.component.css'],
})
export class DialogSalonComponent {
  mapa: mapboxgl.Map | undefined;
  ngOnInit(): void {
    this.mapa = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiY2FybG9zOTg1NiIsImEiOiJjbDQzNHIyamMxaTJoM2pweDE1dGdsODZ6In0.F8JVwEIzHcWD8XTnzV3JPw',
      container: 'mapa', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-99.5163921, 27.4663813], // starting position [lng, lat]
      zoom: 16.6, // starting zoom
    });
    this.crearMarcador(-99.5163921, 27.4663813);
  }

  crearMarcador(lng: number, lat: number) {
    const marker = new mapboxgl.Marker({
      draggable: false,
      color: '#FF0000',
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa!);
  }
}
