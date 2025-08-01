import { Component } from '@angular/core';


@Component({
	selector: 'confirm-button',
	templateUrl: './confirm-button.component.html',
	styleUrl: '../buttons.style.css',
	standalone: false,
})
export class ConfirmButtonComponent {
	public readonly value = 'Confirmar';

	public onClick(..._args: unknown[]): void {
		console.log(ConfirmButtonComponent.name, 'onClick');
	}
}
