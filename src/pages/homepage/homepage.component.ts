import { Component } from '@angular/core';

@Component({
	selector: 'home-page',
	templateUrl: './homepage.component.html',
	styleUrl: './styles/homepage.component.css',
	standalone: false,
})
export class HomepageComponent {
	public readonly iconsHref = {
		linkedin: 'https://www.linkedin.com/in/alvaro-davi/',
		github: 'https://github.com/AlvaroDavi5',
		email: 'mailto:alvaro-davi1@hotmail.com',
		curriculum: 'https://drive.google.com/file/d/1dcYonafspY1OKwCt9Tp6gtl5OlJuchMN/view',
	};
}
