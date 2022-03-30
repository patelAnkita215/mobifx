import { Component } from '@angular/core';
import { SharedService } from '../app/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Mobifx';
  constructor(public sharedservice: SharedService) {   
  }
}
