import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
// import { CommonToasterService } from '../../services/common-toaster.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  regForm: FormGroup;
  showSpinner: boolean = false;
  isValidForm: boolean = false;
  // private toastr: CommonToasterService
  constructor(public _formBuilder: FormBuilder, public sharedService: SharedService, public _authService: ApiService, private router: Router) {
    this.regForm = this._formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.sharedService.sidebar = false;
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  openAccount() {
    if (this.regForm?.invalid) {
      this.isValidForm = true;
      return;
    } else {
      const user = {
        firstname: this.regForm.controls.fname.value,
        lastname: this.regForm.controls.lname.value,
        email: this.regForm.controls.email.value,
        password: this.regForm.controls.password.value,
        login_type: "system"
      };
      this.showSpinner = true;
      this._authService.signup(user).subscribe(res => {
        if (res.status == true) {

          console.log('this.showSpinner', this.showSpinner);
          this.regForm = null;
          this.isValidForm = false;
          this.showSpinner = false;
          // this.toastr.showSuccess(res.message);
          this.router.navigate(['/login']);
          // this.toastr.showError(res.errors.error);
        }
        else {
          this.showSpinner = false;
        }
      },
        _error => {
          this.showSpinner = false;
        });
    }
  }

}
