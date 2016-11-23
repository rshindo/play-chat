import { Component } from '@angular/core';

import { ChannelService } from './channel.service';
import { Channel } from './channel';
import {messages} from './message';


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

  constructor(private _channelService: ChannelService) {}

  ngOnInit() {
  	console.log(messages);
  	this.fetchChannels();
    this.selectedChannel = this.channels[0];
  }

  fetchChannels() {
  	this.channels = this._channelService.fetchAll();
  }

  changeChannel(channel: Channel) {
    this.selectedChannel = channel;
  }
}
