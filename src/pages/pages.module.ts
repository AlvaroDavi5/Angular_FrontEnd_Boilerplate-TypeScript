import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { ButtonsModule } from '@components/buttons/buttons.module';
import { FormsModule } from '@components/forms/forms.module';
import { ResponsiveNavbarComponent } from '@components/navbar/responsive-navbar.component';


@NgModule({
	imports: [
		CommonModule,
		ButtonsModule,
		FormsModule,
	],
	declarations: [
		ResponsiveNavbarComponent,
		HomepageComponent,
	],
	exports: [
		HomepageComponent,
	],
})
export class PagesModule { }
