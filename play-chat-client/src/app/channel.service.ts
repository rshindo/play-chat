import { Injectable, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { NewChannelDialog } from './new-channel-dialog/new-channel-dialog.component';
import { Channel } from './channel';

var CHANNELS = {
	1: new Channel(1, "main"),
	2: new Channel(2, "free space"),
	3: new Channel(3, "developpers")
}

@Injectable()
export class ChannelService {

  constructor(private dialog: MdDialog) { }

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

  public createGroup(viewContainerRef: ViewContainerRef): Observable<boolean> {

    let dialogRef: MdDialogRef<NewChannelDialog>;
    let config = new MdDialogConfig();
    config.viewContainerRef = viewContainerRef;

    dialogRef =  this.dialog.open(NewChannelDialog, config);

    return dialogRef.afterClosed();
  }

}
