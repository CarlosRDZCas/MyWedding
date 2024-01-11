import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurPhotoComponent } from './components/our-photo/our-photo.component';
import { FabComponent } from './components/fab/fab.component';
import { InvitacionComponent } from './components/invitacion/invitacion.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { UsComponent } from './components/us/us.component';
import { DresscodeComponent } from './components/dresscode/dresscode.component';
import { GiftComponent } from './components/gift/gift.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
	declarations: [
		OurPhotoComponent,
		FabComponent,
		InvitacionComponent,
		LugaresComponent,
		UsComponent,
		DresscodeComponent,
		GiftComponent,
		ConfirmationComponent,
	],
	imports: [CommonModule],
	exports: [
		OurPhotoComponent,
		FabComponent,
		InvitacionComponent,
		LugaresComponent,
		UsComponent,
		DresscodeComponent,
		GiftComponent,
		ConfirmationComponent,
	],
	providers: [],
})
export class WeddingModule {}
