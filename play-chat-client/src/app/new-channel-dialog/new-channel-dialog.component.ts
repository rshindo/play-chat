import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-channel-dialog',
  templateUrl: './new-channel-dialog.component.html',
  styleUrls: ['./new-channel-dialog.component.css']
})
export class NewChannelDialog implements OnInit {

  public channelTitle = "";

  constructor(public dialogRef: MdDialogRef<any>) { }

  ngOnInit() {
  }

  public create() {
    console.log(this.channelTitle);
    this.dialogRef.close(true);
  }

}
