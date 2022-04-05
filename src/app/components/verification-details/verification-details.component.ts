import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { SharedService } from '../../services/shared.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-verification-details',
  templateUrl: './verification-details.component.html',
  styleUrls: ['./verification-details.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: false }
  }]
})
export class VerificationDetailsComponent implements OnInit {

  panelOpenState = false;
  token = 'a66cecfcf84e7b010ec58b0f4be3427ad9ad6747535c75c4446d7bdd0324ac8e';
  accountInformaton: FormGroup;
  secondFormGroup: FormGroup;
  showSpinner: boolean = false;
  isValidForm: boolean = false;
  trade: any;
  isValidTrade: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    public sharedService: SharedService,
    public apiService: ApiService
  ) {
    this.accountInformaton = this._formBuilder.group({
      city: ['', Validators.required],
      street_address: ['', Validators.required],
      phone_number: ['', Validators.required],
    });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
    this.sharedService.isVefiHeader = false;
    this.isValidTrade = false;
  }

  ngOnInit() {
    // this.emailVerification();
  }

  emailVerification() {
    // this.showSpinner = true;
    this.apiService.verifyEmail(this.token).subscribe(res => {
      // this.showSpinner = false;
      console.log('res', res);
    },
      (error: any) => {
        console.log('error', error);

        // this.showSpinner = false;
      }
    );
  }

  userInformation() {
    this.radioChange(event);
    if (this.accountInformaton?.invalid) {
      this.isValidForm = true;
      return;
    } else {
      const payload = {
        user_id: "1",
        country_id: "1",
        country_code: "+91",
        phone: this.accountInformaton.controls.phone_number.value,
        bod: "1990-11-08",
        city: this.accountInformaton.controls.city.value,
        street_address: this.accountInformaton.controls.street_address.value
      };
      // this.apiService.userInfo(JSON.stringify(payload)).subscribe(res => {
      //   console.log('res', res);
      // },
      //   (error: any) => {
      //     console.log('error', error);

      //     // this.showSpinner = false;
      //   });
      // console.log('payload', payload);
    }
  }

  radioChange(event: any) {
    this.trade = event.value;
    // console.log("this.trade", this.trade);
    if (event.value == null) {
      // console.log("this.trade2", this.trade);
      this.isValidTrade = true;
    } else {
      // console.log("this.trade3", this.trade);
      this.isValidTrade = false;
    }
  }

}
