import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { reduce } from 'rxjs';

@Component({
  selector: 'wedding-dialog-iglesia',
  templateUrl: './dialog-iglesia.component.html',
  styleUrls: ['./dialog-iglesia.component.css'],
})
export class DialogIglesiaComponent implements OnInit {
  mapa: mapboxgl.Map | undefined;
  ngOnInit(): void {
    this.mapa = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiY2FybG9zOTg1NiIsImEiOiJjbDQzNHIyamMxaTJoM2pweDE1dGdsODZ6In0.F8JVwEIzHcWD8XTnzV3JPw',
      container: 'mapa', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-99.5396777,27.4561691], // starting position [lng, lat]
      zoom: 16.6, // starting zoom
    });
    this.crearMarcador(-99.5396777, 27.4561691);
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
