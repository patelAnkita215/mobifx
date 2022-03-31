import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.component.html',
  styleUrls: ['./invite-friend.component.scss']
})
export class InviteFriendComponent implements OnInit {

  constructor(public sharedService: SharedService, public dialog: MatDialog) {
    this.sharedService.sidebar = true;
  }

  ngOnInit(): void {
  }

}
