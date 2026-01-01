import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';


@Component({
	template: '<h1>Test Component</h1>',
	standalone: false,
})
class TestComponent { }

describe('AppComponent', () => {
	let fixture: ComponentFixture<AppComponent>;
	let app: AppComponent;
	let router: Router;
	let location: Location;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppComponent],
			declarations: [TestComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AppComponent);
		router = TestBed.inject(Router);
		location = TestBed.inject(Location);
		app = fixture.componentInstance;
	});

	it('should create the app', () => {
		expect(app).toBeTruthy();
	});

	it('should render the router outlet', () => {
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('router-outlet')).toBeTruthy();
	});
});
