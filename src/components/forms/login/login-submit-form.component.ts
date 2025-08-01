import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'login-submit-form',
	templateUrl: './login-submit-form.component.html',
	styleUrl: './login-submit-form.style.css',
	standalone: false,
})
export class LoginSubmitFormComponent {
	public readonly emailLabel = 'e-Mail';
	public readonly passwordLabel = 'Senha';
	public readonly submitLabel = 'Entrar';
	public readonly loginForm: FormGroup<{
		email_input: FormControl<string | null>;
		password_input: FormControl<string | null>;
	}>;

	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly httpClient: HttpClient,
	) {
		this.loginForm = this.formBuilder.group({
			email_input: ['', [Validators.required, Validators.email]],
			password_input: ['', Validators.required]
		});
	}

	public onSubmit(): void {
		const { email_input: email, password_input: password } = this.loginForm.value;

		const payload = { email, password };
		this.httpClient.post<unknown>('http://seu-backend.com/api/formulario', payload)
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
