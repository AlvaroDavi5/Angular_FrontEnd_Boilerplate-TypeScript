import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HomepageComponent } from './homepage.component';
import { PagesModule } from '@pages/pages.module';


describe('HomepageComponent', () => {
	let fixture: ComponentFixture<HomepageComponent>;
	let app: HomepageComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PagesModule],
			providers: [
				provideHttpClient(),
				provideHttpClientTesting()
			]
		}).compileComponents();

		fixture = TestBed.createComponent(HomepageComponent);
		app = fixture.componentInstance;
	});

	it('should create the component', () => {
		expect(app).toBeTruthy();
	});

	it('should have the page title', () => {
		expect(app.iconsHref.github).toEqual('https://github.com/AlvaroDavi5');
	});

	it('should render the navbar title', () => {
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		const h1Element = compiled.querySelector('nav h1');
		expect(h1Element?.textContent).toContain('AD Tech Solutions');
	});

	it('should render the footer text', () => {
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		const footerElement = compiled.querySelector('footer p');
		expect(footerElement?.textContent).toContain('Álvaro Alves');
	});
});
