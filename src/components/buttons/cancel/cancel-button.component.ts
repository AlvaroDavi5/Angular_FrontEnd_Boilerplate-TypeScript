import { Component } from '@angular/core';


@Component({
	selector: 'cancel-button',
	templateUrl: './cancel-button.component.html',
	styleUrl: '../buttons.style.css',
	standalone: false,
})
export class CancelButtonComponent {
	public readonly value = 'Cancelar';

	public onClick(..._args: unknown[]): void {
		console.log(CancelButtonComponent.name, 'onClick');
	}
}
