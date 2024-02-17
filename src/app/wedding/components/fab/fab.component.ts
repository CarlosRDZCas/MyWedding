import { Component } from '@angular/core';

@Component({
  selector: 'wedding-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css'],
})
export class FabComponent {
  audio = new Audio('assets/audio/todocambio.mpeg');

  ngOnInit(): void {
    this.audio.load();
    this.playSound();

  }


  playSound() {
    this.audio.muted = false;
    if (!this.audio.paused) {
      console.log('pausar');
      this.audio.pause();
    } else {
      console.log('play');
      this.audio.play();
    }
  }
}
