import { Injectable } from '@angular/core';

import { Channel } from './channel';

var CHANNELS = {
	1: new Channel(1, "main"),
	2: new Channel(2, "free space"),
	3: new Channel(3, "developpers")
}

@Injectable()
export class ChannelService {

  constructor() { }

  fetch(channelId: number): Channel {
  	return CHANNELS[channelId];
  }

  fetchAll(): Channel[] {
  	// return CHANNELS.values();
  	var values: Channel[] = [];
  	for(var key in CHANNELS) {
  		values.push(CHANNELS[key])
  	}
  	return values;
  }

}
