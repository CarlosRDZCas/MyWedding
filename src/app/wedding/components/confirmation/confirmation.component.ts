import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import data from '../../data/invitados.json';

@Component({
  selector: 'wedding-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  param: string = '';
  json: string = '';
  invitados: string[] = [];

  constructor(private route: ActivatedRoute) {
    this.param = this.route.snapshot.queryParamMap.get('ID')!;
    let invitado = data.filter((ID) => ID.ID === this.param);
    invitado.forEach((element) => {
      this.invitados = element.Invitados;
    });
  }
}
