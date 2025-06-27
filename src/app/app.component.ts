import { Component } from '@angular/core';
import { PagesModule } from '@pages/pages.module';
import { PagesRoutingModule } from '@pages/pages-routing.module';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	standalone: true,
	imports: [
		PagesModule,
		PagesRoutingModule,
	],
})
export class AppComponent {
}
