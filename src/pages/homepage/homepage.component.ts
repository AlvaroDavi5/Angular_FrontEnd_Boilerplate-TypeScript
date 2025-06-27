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
	public menuEnabled = false;
	private readonly menuContent = `
		<nav>
			<ul>
				<li><a href="#about">About</a></li>
				<li><a href="#experiences">Experiences</a></li>
				<li><a href="#skills">Skills</a></li>
			</ul>
		</nav>
	`;

	constructor(private elementRef: ElementRef<HTMLElement>) { }

	ngOnInit(): void {
		this.initializeSkillsToggles();
	}

	public toggleOptionsMenu(): void {
		this.menuEnabled = !this.menuEnabled;
		const optionsMenu: HTMLElement | null = this.elementRef.nativeElement.querySelector('#menu-options');
		if (!optionsMenu) {
			return;
		}
		if (this.menuEnabled) {
			optionsMenu.innerHTML = this.menuContent;
		}
	}

	private initializeSkillsToggles(): void {
		const skillsDetails = this.elementRef.nativeElement.querySelectorAll('div.skills-details');

		skillsDetails.forEach((skillDetail: Element) => {
			const knowledgements: HTMLElement | null = skillDetail.querySelector('div.knowledgements');
			if (knowledgements) {
				knowledgements.style.display = 'none';
			}
		});

		skillsDetails.forEach((skillDetail: Element) => {
			skillDetail.addEventListener('click', () => {
				const knowledgements: HTMLElement | null = skillDetail.querySelector('div.knowledgements');
				if (knowledgements) {
					knowledgements.style.display = knowledgements.style.display === 'none' ? 'flex' : 'none';
				}
			});
		});
	}
}
