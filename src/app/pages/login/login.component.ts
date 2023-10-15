import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin = this.formBuilder.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6), Validators.required]],
  }, { validators: this.checkPassword })
  constructor(private formBuilder: FormBuilder) {

  }

  checkPassword(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) return null;
    return { notMatch: true };
  }
  onSubmit() {
    console.log(this.formLogin.value);
  }
}
