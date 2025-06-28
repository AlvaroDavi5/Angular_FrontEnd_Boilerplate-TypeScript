import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
	selector: 'home-page',
	templateUrl: './homepage.component.html',
	styleUrl: './styles/homepage.component.css',
	standalone: false,
})
export class HomepageComponent implements OnInit {
	public readonly myName = 'Álvaro Alves';
	public readonly myOccupation = 'Software Engineer';
	public readonly myProfilePicture = 'https://github.com/AlvaroDavi5.png';
	public readonly iconsHref = {
		linkedin: 'https://www.linkedin.com/in/alvaro-davi/',
		github: 'https://github.com/AlvaroDavi5',
		email: 'mailto:alvaro.davisa@gmail.com',
		curriculum: 'https://drive.google.com/file/d/1dcYonafspY1OKwCt9Tp6gtl5OlJuchMN/view',
	};
	private menuEnabled = false;

	constructor(
		private readonly elementRef: ElementRef<HTMLElement>,
	) { }

	ngOnInit(): void {
		this.initializeSkillsToggles();
	}

	public toggleOptionsMenu(): void {
		this.menuEnabled = !this.menuEnabled;
		const optionsMenu = this.elementRef.nativeElement.querySelector<HTMLElement>('#menu-options');
		if (optionsMenu) {
			optionsMenu.style.display = this.menuEnabled === true ? 'flex' : 'none';
		}
	}

	private initializeSkillsToggles(): void {
		const skillsDetails = this.elementRef.nativeElement.querySelectorAll<HTMLElement>('div.skills-details');

		skillsDetails.forEach((skillDetail) => {
			const knowledgements = skillDetail.querySelector<HTMLElement>('div.knowledgements');
			if (knowledgements) {
				knowledgements.style.display = 'none';
			}
		});

		skillsDetails.forEach((skillDetail: Element) => {
			skillDetail.addEventListener('click', () => {
				const knowledgements = skillDetail.querySelector<HTMLElement>('div.knowledgements');
				if (knowledgements) {
					knowledgements.style.display = knowledgements.style.display === 'none' ? 'flex' : 'none';
				}
			});
		});
	}
}
