import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
	selector: 'responsive-navbar',
	templateUrl: './responsive-navbar.component.html',
	styleUrl: './responsive-navbar.style.css',
	standalone: false,
})
export class ResponsiveNavbarComponent implements OnInit {
	public readonly companyName = 'AD Tech Solutions';
	public readonly companyLogo = 'assets/github-icon-white.png';

	public readonly sectionsTitle: Record<string, string> = {
		about: 'A Empresa',
		solutions: 'Soluções',
		portfolio: 'Portfólio',
		contact: 'Contato',
	};
	private menuEnabled = false;

	constructor(
		private readonly elementRef: ElementRef<HTMLElement>,
	) { }

	public ngOnInit(): void {
		this.initializeOptionsMenu();
	}

	public toggleOptionsMenu(): void {
		this.menuEnabled = !this.menuEnabled;
		const optionsMenu = this.elementRef.nativeElement.querySelector<HTMLElement>('#menu-options');
		if (optionsMenu) {
			optionsMenu.style.display = this.menuEnabled === true ? 'flex' : 'none';
		}
	}

	private initializeOptionsMenu(): void {
		this.menuEnabled = false;
		const optionsMenu = this.elementRef.nativeElement.querySelector<HTMLElement>('#menu-options');
		if (optionsMenu) {
			optionsMenu.style.display = 'none';
		}
	}
}
