import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelButtonComponent } from './cancel/cancel-button.component';
import { ConfirmButtonComponent } from './confirm/confirm-button.component';


@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		ConfirmButtonComponent,
		CancelButtonComponent,
	],
	providers: [],
	exports: [
		ConfirmButtonComponent,
		CancelButtonComponent,
	],
})
export class ButtonsModule { }
