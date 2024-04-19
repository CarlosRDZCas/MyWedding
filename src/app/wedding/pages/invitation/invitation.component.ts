import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../data/invitados.json';

@Component({
  selector: 'page-invitation',

  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css'],
})
export class InvitationComponent implements AfterViewInit {
  param: string = '';
  json: string = '';
  invitados: string[] = [];
  existe: string = '';
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute) {
    this.param = this.route.snapshot.queryParamMap.get('ID')!;
    //  this.existe = data.find((ID)=>ID.ID===this.param)!
    // console.log(this.existe);
    let invitado = data.filter((ID) => ID.ID === this.param);
    invitado.forEach((element) => {
      this.existe = element.ID;
    });
  }
  ngAfterViewInit(): void {
    this.isLoading = false;
  }
}
