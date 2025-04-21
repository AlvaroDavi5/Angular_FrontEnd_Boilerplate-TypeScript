import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'login-submit-form',
	templateUrl: './login-submit-form.component.html',
	styleUrl: '../forms.style.css',
	standalone: false,
})
export class LoginSubmitFormComponent {
	public emailLabel = 'Email';
	public passwordLabel = 'Senha';
	public submitLabel = 'Entrar';
	public readonly loginForm: FormGroup;

	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly httpClient: HttpClient,
	) {
		this.loginForm = this.formBuilder.group({
			email_input: [],
			password_input: [],
		});
	}

	public onSubmit(): void {
		const data = this.loginForm.value;
		console.log(data)

		this.httpClient.post<unknown>('http://seu-backend.com/api/formulario', data)
			.subscribe({
				next: (res) => {
					console.log('Sucesso:', res);
				},
				error: (err) => {
					console.error('Erro:', err);
				}
			});
	}
}
