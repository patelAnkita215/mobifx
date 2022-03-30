import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isValidForm: boolean = false;

  constructor(public _formBuilder: FormBuilder, public _authService: ApiService, private router: Router, public sharedservice: SharedService) {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
    this.sharedservice.sidebar = false;
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  login() {
    if (this.loginForm?.invalid) {
      this.isValidForm = true;
      return;
    } else {
      const user = {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value,
      };

      this._authService.login(JSON.stringify(user)).subscribe(res => {
        if (res.status === true) {
          this.loginForm = null;
          this.isValidForm = false;

          localStorage.setItem('token', res.data?.accessToken);
          localStorage.setItem('firstname', res.data?.user_info?.firstname);
          localStorage.setItem('lastname', res.data?.user_info?.lastname);
          localStorage.setItem('email', res.data?.user_info?.email);
          // this.toastr.showSuccess(res.message);
          this.router.navigate(['/dashboard']);
        }
        else {
          // this.toastr.showError(res.errors.error);
        }
      });
    }
  }
}
