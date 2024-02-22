import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogIglesiaComponent } from '../dialog-iglesia/dialog-iglesia.component';
import { DialogSalonComponent } from '../dialog-salon/dialog-salon.component';

@Component({
  selector: 'wedding-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
})
export class LugaresComponent {
  constructor(private dialog: MatDialog) {}

  openDialogIglesia() {
    const dialogRef = this.dialog.open(DialogIglesiaComponent);
    dialogRef.afterClosed().subscribe((result) => {

    });
  }

  openDialogSalon() {
    const dialogRef = this.dialog.open(DialogSalonComponent);
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
