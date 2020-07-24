import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  submit() {
    const { username, password } = this.form.value;
    this.authService.login(username, password).subscribe(user => {
      this.router.navigate(['admin']);
    });
  }
}
