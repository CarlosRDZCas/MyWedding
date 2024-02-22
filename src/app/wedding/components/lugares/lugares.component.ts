import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogIglesiaComponent } from '../dialog-iglesia/dialog-iglesia.component';

@Component({
  selector: 'wedding-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
})
export class LugaresComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogIglesiaComponent);

  dialogRef.afterClosed().subscribe((result)=>{
    console.log('closed');
  })
  }


}
