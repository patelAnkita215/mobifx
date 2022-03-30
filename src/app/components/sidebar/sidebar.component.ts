import { Component, OnInit } from '@angular/core';
// import * as data from '../../../assets/constants/sidebar.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navitems: any = [
    {
      "linkText": "Dashboard",
      "parentLink": "/dashboard",
      "menu": false,
      "submenu": [],
      "icon": "assets/images/icon/statics.png"
    },
    {
      "linkText": "Withdraw",
      "parentLink": "/withdraw",
      "menu": false,
      "submenu": [],
      "icon": "assets/images/icon/cash-withdraw-icon-vector-12872784.jpg"
    },
    {
      "linkText": "Intarnal transfer",
      "parentLink": "/internal-transfer",
      "menu": false,
      "submenu": [],
      "icon": "assets/images/icon/invite-friends-icon-11.jpg"

    },
    {
      "linkText": "Operation history",
      "parentLink": "",
      "menu": false,
      "submenu": [
        {
          "childtext": "Deposit history",
          "link": "/deposit-history"
        },
        {
          "childtext": "Withdrawal history",
          "link": "/withdraw-history"
        },
        {
          "childtext": "Transfer history",
          "link": "/transfer-history"
        }
      ],
      "icon": "assets/images/icon/images.jpg"
    },
    {
      "linkText": "Trading accounts",
      "parentLink": "",
      "menu": false,
      "submenu": [
        {
          "childtext": "Account List",
          "link": "/account-list"
        },
        {
          "childtext": "Manage Bonuses",
          "link": "/manage-bonuses"
        },
        {
          "childtext": "Monitoring",
          "link": "/monitoring"
        },
        {
          "childtext": "Open Real account",
          "link": "/open-real-account"
        },
        {
          "childtext": "Open Demo account",
          "link": "/open-demo-account"
        }
      ],
      "icon": "assets/images/icon/treding.png"
    },
    {
      "linkText": "User Statuses",
      "parentLink": "/user-status",
      "menu": false,
      "submenu": [],
      "icon": "assets/images/icon/istockphoto-1283621184-170667a.jpg"
    },
    {
      "linkText": "Invite a friend",
      "parentLink": "/",
      "menu": false,
      "submenu": [],
      "icon": "assets/images/icon/istockphoto-1283621184-170667a.jpg"
    }
  ];

  // data: any = data;
  result: any = [];
  firstName: any;
  lastName: any;

  constructor() {
    // console.log("data", this.navitems);

    this.firstName = localStorage.getItem('firstname');
    this.lastName = localStorage.getItem('lastname');

    for (let key in this.navitems) {
      if (this.navitems.hasOwnProperty(key)) {
        this.result.push(this.navitems[key]);
      }
    }
  }
  ddToggle(i) {
    this.result[i].menu = !this.result[i].menu;
    // console.log(this.result[i].menu);
  }

  ngOnInit(): void {
  }

}
