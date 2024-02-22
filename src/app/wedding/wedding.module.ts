import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurPhotoComponent } from './components/our-photo/our-photo.component';
import { FabComponent } from './components/fab/fab.component';

import { LugaresComponent } from './components/lugares/lugares.component';
import { UsComponent } from './components/us/us.component';
import { DresscodeComponent } from './components/dresscode/dresscode.component';
import { GiftComponent } from './components/gift/gift.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { EnvelopeComponent } from './pages/envelope/envelope.component';
import { InvitationComponent } from './pages/invitation/invitation.component';
import { InvitacionComponent } from './components/invitacion/invitacion.component';
import { RouterModule } from '@angular/router';
import { IntinerarioComponent } from './components/intinerario/intinerario.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogIglesiaComponent } from './components/dialog-iglesia/dialog-iglesia.component';
import { DialogSalonComponent } from './components/dialog-salon/dialog-salon.component';

@NgModule({
  declarations: [
    OurPhotoComponent,
    FabComponent,
    InvitationComponent,
    InvitacionComponent,
    LugaresComponent,
    UsComponent,
    DresscodeComponent,
    GiftComponent,
    ConfirmationComponent,
    EnvelopeComponent,
    IntinerarioComponent,
    DialogIglesiaComponent,
    DialogSalonComponent
  ],
  imports: [CommonModule,RouterModule, MatDialogModule],
  exports: [
    OurPhotoComponent,
    FabComponent,
    InvitationComponent,
    InvitacionComponent,
    LugaresComponent,
    UsComponent,
    DresscodeComponent,
    GiftComponent,
    ConfirmationComponent,
    EnvelopeComponent,
    IntinerarioComponent,
    DialogIglesiaComponent,
    DialogSalonComponent
  ],
  providers: [],
})
export class WeddingModule {}
