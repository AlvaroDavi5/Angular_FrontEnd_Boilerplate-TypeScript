import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { AppComponent } from '@app/app.component';
import { PagesModule } from '@pages/pages.module';
import { PagesRoutingModule } from '@pages/pages-routing.module';


describe('HomepageComponent', () => {
	let fixture: ComponentFixture<HomepageComponent>;
	let app: HomepageComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppComponent],
			providers: [PagesModule, PagesRoutingModule, HomepageComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HomepageComponent);
		app = fixture.componentInstance;
	});

	it('should create the component', () => {
		expect(app).toBeTruthy();
	});

	it('should have the page title', () => {
		const fixture = TestBed.createComponent(HomepageComponent);
		const app = fixture.componentInstance;
		expect(app.myOccupation).toEqual('Software Engineer');
	});

	it('should render the page body title', () => {
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('h1')?.textContent).toBe('Álvaro Alves');
	});
});
