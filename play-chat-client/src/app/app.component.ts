import { Component, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

import { ChannelService } from './channel.service';
import { Channel } from './channel';
import { messages } from './message';
import { NewChannelDialog } from './new-channel-dialog/new-channel-dialog.component';


@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  selector: 'app-root',
  providers: [ ChannelService ]
})
export class AppComponent {
  channelId: number;
  channels: Channel[];
  selectedChannel: Channel;
  dialogRef: MdDialogRef<any>;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private _channelService: ChannelService) {}

  ngOnInit() {
  	this.fetchChannels();
    // this.selectedChannel = this.channels[0];
  }

  fetchChannels() {
    this._channelService
      .fetchAll()
      .subscribe(
        channels => this.channels = channels,
        error => console.log(error)
      );
  }

  changeChannel(channel: Channel) {
    this.selectedChannel = channel;
  }

  openCreateChannelDialog() {
    this._channelService
      .createGroup(this.viewContainerRef)
      .subscribe(res => {
        if(res) {
          this.fetchChannels();
        }
      });
  }
}
