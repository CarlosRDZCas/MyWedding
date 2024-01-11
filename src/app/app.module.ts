import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeddingModule } from './wedding/wedding.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, WeddingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
