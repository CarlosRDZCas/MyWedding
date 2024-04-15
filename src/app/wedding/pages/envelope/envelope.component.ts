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
    this.category = this._activatedRoute.snapshot.queryParamMap.get('ID')!;
    console.log(this.category);
  }
}
