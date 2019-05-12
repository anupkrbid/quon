import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { SupportedPlatformsComponent } from '../supported-platforms/supported-platforms.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  platforms =['facebook', 'instagram', 'twitter', 'linkdin'];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onAddPlatform() {
    const dialogRef: MatDialogRef<SupportedPlatformsComponent> = this.dialog.open(SupportedPlatformsComponent, {
      data: this.platforms
    });
  }

}
