import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvelopeComponent } from './wedding/pages/envelope/envelope.component';
import { InvitationComponent } from './wedding/pages/invitation/invitation.component';


const routes: Routes = [
	// { path: '', component: HomePageComponent },
	{ path: 'envelope', component: EnvelopeComponent },
	{ path: 'invitation', component: InvitationComponent },

	{ path: '**', redirectTo: 'envelope' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
