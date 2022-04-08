import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showSpinner: boolean = false;
  userAccount: any = [];
  accountDetailsList: any = [];
  planName: string;
  planName2: string;

  constructor(
    public sharedService: SharedService,
    public apiService: ApiService) {
    this.sharedService.sidebar = true;
    this.sharedService.isHeader = false;
  }

  ngOnInit() {
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

  accountById(id: any) {    
    this.accountDetails(id);
  }

  accountDetails(id: any) {
    this.showSpinner = true;
    this.apiService.getAccountList(id).subscribe(res => {
      this.showSpinner = false;
      this.accountDetailsList = res?.data;
      this.planName = this.accountDetailsList?.plan?.name.substr(this.accountDetailsList?.plan?.name.indexOf(" ") + 1).slice(0, 2);
      this.planName2 = this.accountDetailsList?.plan?.name.substr(this.accountDetailsList?.plan?.name.indexOf(" ") + 1).slice(2);
    },
      (error: any) => {
      });
  }

}
