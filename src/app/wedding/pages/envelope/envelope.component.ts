import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'page-envelope',
  templateUrl: './envelope.component.html',
  styleUrls: ['./envelope.component.css'],
})
export class EnvelopeComponent {
  category: string = '';

  constructor(private router: Router, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('category')!;
    });
  }

}
