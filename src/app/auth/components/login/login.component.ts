import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { getError } from 'src/app/helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  getError: (path: any) => string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.getError = getError;
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)])
    });
  }

  submit() {
    const { email, password } = this.form.value;
    this.authService.login(email, password).subscribe(user => {
      this.router.navigate(['/']);
    });
  }
}
