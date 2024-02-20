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
    this.audio.play();

  }

  playSound(element: any) {
    this.audio.muted = false;
    if (!this.audio.paused) {
      this.audio.pause();
      element.textContent = 'Play';

    } else {
      this.audio.play();
      element.textContent = 'Pause';
    }
  }
}
