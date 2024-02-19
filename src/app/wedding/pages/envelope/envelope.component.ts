import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-envelope',
  templateUrl: './envelope.component.html',
  styleUrls: ['./envelope.component.css'],
})
export class EnvelopeComponent {

  constructor(private router:Router){}

  navigate(){

    this.router.navigate(['/invitation'])
  }

}
