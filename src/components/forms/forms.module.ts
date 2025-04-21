import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSubmitFormComponent } from './login/login-submit-form.component';


@NgModule({
	imports: [
		CommonModule,
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
