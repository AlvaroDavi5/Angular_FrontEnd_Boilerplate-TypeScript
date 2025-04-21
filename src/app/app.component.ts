import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsModule } from '@components/buttons/buttons.module';
import { FormsModule } from '@components/forms/forms.module';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	standalone: true,
	imports: [
		RouterOutlet,
		ButtonsModule,
		FormsModule,
	],
})
export class AppComponent {
	public readonly title = 'Angular Frontend Boilerplate';
}
