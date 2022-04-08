import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deposithistory',
  templateUrl: './deposit-history.component.html',
  styleUrls: ['./deposit-history.component.scss']
})
export class DepositHistoryComponent implements OnInit {

  showSpinner: boolean = false;
  userAccount: any = [];

  constructor(
    public sharedService: SharedService,
    public apiService: ApiService,
    public router: Router,
    private _snackBar: MatSnackBar) {
    this.sharedService.sidebar = true;
    this.sharedService.isHeader = false;
  }

  ngOnInit(): void {
    this.userAccountList();
  }

  userAccountList() {
    this.showSpinner = true;
    this.apiService.getUserAllAccountList().subscribe(res => {
      this.showSpinner = false;
      this.userAccount = res?.data;
    },
      (error: any) => {
      });
  }

  selectedStatus(event: any) {
    console.log('event', event.value);

  }
  
  applyFilter() {

  }
}
