import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { InviteFriendComponent } from '../invite-friend/invite-friend.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public sharedService: SharedService, public dialog: MatDialog) {
    this.sharedService.sidebar = true;
    this.sharedService.isHeader = false;
  }

  ngOnInit() {
    // this.openDialog();
  }

  openDialog() {
    this.dialog.open(InviteFriendComponent);
  }

}
