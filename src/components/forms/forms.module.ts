import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSubmitFormComponent } from './login/login-submit-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
	],
	declarations: [
		LoginSubmitFormComponent,
	],
	providers: [],
	exports: [
		LoginSubmitFormComponent,
	],
})
export class FormsModule { }
