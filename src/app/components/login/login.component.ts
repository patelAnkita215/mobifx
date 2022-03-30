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
  }

  login() {
    this.router.navigate(['/dashboard'])
    if (this.loginForm?.invalid) {
      this.isValidForm = true;
      return;
    } else {
      const user = {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value,
      };

      this._authService.login(JSON.stringify(user)).subscribe(data => {
        if (data.status == true) {
          this.loginForm = null;
          this.isValidForm = false;
          // this.toastr.showSuccess(data.message);
          this.router.navigate(['/dashboard']);
        }
        else {
          // this.toastr.showError(data.errors.error);
        }
      });
    }
  }
}
