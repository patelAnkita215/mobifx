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

  isValidForm: boolean = false;
  // private toastr: CommonToasterService
  constructor(public _formBuilder: FormBuilder,public sharedService: SharedService, public _authService: ApiService, private router: Router) {
    this.regForm = this._formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.sharedService.sidebar = false;
  }

  ngOnInit(): void {
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
      this._authService.signup(user).subscribe(data => {
        if (data.status == true) {
          this.regForm = null;
          this.isValidForm = false;
          // this.toastr.showSuccess(data.message);
          this.router.navigate(['/login']);
        }
        else {
          // this.toastr.showError(data.errors.error);
        }
      });
    }
  }

}
