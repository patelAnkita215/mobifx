import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { SharedService } from '../../services/shared.service';
import { ApiService } from '../../services/api.service';
import { CountryPickerService, ICountry } from 'ngx-country-picker';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

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
  token: string;
  accountInformaton: FormGroup;
  secondFormGroup: FormGroup;
  showSpinner: boolean = false;
  isValidForm: boolean = false;
  trade: any;
  isValidTrade: boolean = false;
  public countries: ICountry[] = [];
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  day = 0;
  month = 0;
  year = 0;
  selectedDay = "0";
  selectedMonth = "0";
  selectedYear = "0";
  planData: any = {};
  isShowBalance: boolean = false;
  fixedRates: boolean = true;
  isHideFixedRate: boolean = true;
  isHideAccType: boolean = true;
  isHideCurrency: boolean = true;

  constructor(
    private _formBuilder: FormBuilder,
    public sharedService: SharedService,
    public apiService: ApiService,
    protected countryPicker: CountryPickerService,
    private router: Router,
    private route: ActivatedRoute
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
    this.route.queryParams.subscribe(queryParams => {
      this.token = queryParams['token'];
      console.log('token', this.token);
      this.router.navigate(['/verification-details']);
    });
    if (this.token) {
      this.emailVerification();
    }
    this.getPlans();
    // this.apiService.getCountry().subscribe(res => {
    //   console.log('res', res);
    // });
    this.countryPicker.getCountries().subscribe((countries: ICountry[]) => this.countries = countries);
  }

  async emailVerification() {
    // this.showSpinner = true;
    this.apiService.verifyEmail(this.token).subscribe(res => {
      console.log('res', res);
      this.router.navigate(['/verification-details']);
    },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  getPlans() {
    this.apiService.getPlan().subscribe(res => {
      console.log('res', res);
      if (res) {
        this.planData = res.data;
      }
    },
      (error: any) => {
        console.log('error', error);
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
        country_code: this.accountInformaton.controls.phone_number.value['dialCode'],
        phone: this.accountInformaton.controls.phone_number.value['number'].replace(/\s/g, ""),
        // bod: this.year + "-" + this.month + "-" + this.day,
        bod: "1990-11-08",
        city: this.accountInformaton.controls.city.value,
        street_address: this.accountInformaton.controls.street_address.value
      };
      console.log('this.accountInformaton', this.accountInformaton);
      console.log('payload', payload);
      // this.showSpinner = true;
      this.apiService.userInfo(JSON.stringify(payload)).subscribe(res => {
        console.log('res', res);
      },
        (error: any) => {
          console.log('error', error);

          // this.showSpinner = false;
        });
      console.log('payload', payload);
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

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  getCountry(event) {
    console.log('event', event);
  }

  onSelectDay(event: any) {
    this.day = event.value;
    console.log('event', event);
  }
  onSelectMonth(event: any) {
    this.month = event.value;
    console.log('event', event);
  }
  onSelectYear(event: any) {
    this.year = event.value;
    console.log('event', event);
  }
  onSelectChange(searchValue: string): void {
    console.log(searchValue);
    if (searchValue == "demo") {
      this.isShowBalance = true;
      this.fixedRates = false;
      this.isHideFixedRate = false;
    }
    else {
      this.isShowBalance = false;
      this.isHideFixedRate = true;
    }
    if (searchValue == "true") {
      this.isHideAccType = false;
      this.isHideCurrency = false;
    } else {
      // this.isShowBalance = false;
      this.isHideAccType = true;
      this.isHideCurrency = true;
    }
    if (searchValue == "USD" || searchValue == "EUR") {
      this.isShowBalance = false;
      this.isHideFixedRate = false;
    } else {
      this.isShowBalance = true;
      this.isHideFixedRate = true;
    }
  }
}
