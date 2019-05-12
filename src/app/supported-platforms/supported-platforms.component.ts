import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-supported-platforms',
  templateUrl: './supported-platforms.component.html',
  styleUrls: ['./supported-platforms.component.css']
})
export class SupportedPlatformsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SupportedPlatformsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log('Received Data: ', this.data);
  }

  onCloseModal(): void {
    this.dialogRef.close();
  }

}
