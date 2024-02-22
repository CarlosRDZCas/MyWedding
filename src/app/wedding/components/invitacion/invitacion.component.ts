import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
const counter = timer(0, 1000);
@Component({
	selector: 'wedding-invitacion',
	templateUrl: './invitacion.component.html',
	styleUrls: ['./invitacion.component.css'],
})
export class InvitacionComponent implements OnInit {
	public date = new Date();
	public delta: number = 0;
	public dateSent = new Date('2024-05-25 17:00:00');
	public hour: number | string = '';
	public minute: number | string = '';
	public second: number | string = '';
	public days: number | string = '';

	ngOnInit(): void {
		counter.subscribe(() => {
			this.time();
		});
	}
	public time() {
		this.date = new Date();

		this.second =
			Math.abs(
				Date.UTC(this.dateSent.getFullYear(), this.dateSent.getMonth(), this.dateSent.getDate(), this.dateSent.getHours(), this.dateSent.getMinutes(), this.dateSent.getSeconds()) -
					Date.UTC(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), this.date.getHours(), this.date.getMinutes(), this.date.getSeconds())
			) / 1000;

		this.minute = Math.floor(this.second / 60);
		this.hour = Math.floor(this.minute / 60);
		this.days = Math.floor(this.hour / 24);

		this.hour = this.hour - this.days * 24;
		this.minute = this.minute - this.days * 24 * 60 - this.hour * 60;
		this.second = this.second - this.days * 24 * 60 * 60 - this.hour * 60 * 60 - this.minute * 60;

		if (this.second < 10) {
			this.second = '0' + this.second;
		}
		if (this.minute < 0) {
			this.minute = '0' + this.minute;
		}


	}
}
