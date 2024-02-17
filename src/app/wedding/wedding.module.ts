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
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

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
  ],
  imports: [CommonModule,RouterModule],
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
  ],
  providers: [],
})
export class WeddingModule {}
