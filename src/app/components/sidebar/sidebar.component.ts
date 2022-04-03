import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/constants/sidebar.json';
import { MatDialog } from '@angular/material/dialog';
import { InviteFriendComponent } from '../../components/invite-friend/invite-friend.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  data: any = data;
  result: any = [];
  firstName: any;
  lastName: any;
  hostname = location.pathname;
  currentRoute: string;

  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) {
    // console.log("data", this.navitems);

    this.firstName = localStorage.getItem('firstname');
    this.lastName = localStorage.getItem('lastname');

    for (let key in data.default.navitems) {
      if (data.default.navitems.hasOwnProperty(key)) {
        this.result.push(data.default.navitems[key]);
      }
    }
  }

  ddToggle(i) {
    this.result[i].menu = !this.result[i].menu;
  }

  ngOnInit(): void {
  }

  menu(event: any) {
    // console.log('event', event);
    if (event?.linkText == "Invite a friend") {
      // event?.parentLink.push[('dashboard')];
      this.router.navigate([this.hostname]);
      this.openDialog();
    }
    // console.log('hostname', this.hostname);
  }

  openDialog() {
    this.dialog.open(InviteFriendComponent);
  }

  logout() {
    localStorage.clear();
  }

}
