import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages.module';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomepageComponent },
];

@NgModule({
	imports: [
		PagesModule,
		RouterModule.forChild(routes),
	],
	exports: [RouterModule]
})
export class PagesRoutingModule { }
