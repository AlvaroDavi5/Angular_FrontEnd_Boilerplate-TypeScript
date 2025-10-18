import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { PagesRoutingModule } from '@pages/pages-routing.module';


export const appConfig: ApplicationConfig = {
	providers: [
		provideClientHydration(),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideHttpClient(withFetch()),
		importProvidersFrom(PagesRoutingModule),
		provideRouter(routes),
	]
};
