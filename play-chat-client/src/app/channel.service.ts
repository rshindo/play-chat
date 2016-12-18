import { Injectable, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { NewChannelDialog } from './new-channel-dialog/new-channel-dialog.component';
import { Channel } from './channel';

@Injectable()
export class ChannelService {

  private url = "http://localhost:8080/api/channel";

  constructor(private dialog: MdDialog, private http: Http) { }

  fetchAll(): Observable<Channel[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let json = res.json();
    var channels = [];
    for(var i = 0; i < json.length; i++) {
      var obj = json[i]
      channels.push(new Channel(obj.channelId, obj.title));
    }
    return channels || [];
  }

  public createGroup(viewContainerRef: ViewContainerRef): Observable<boolean> {

    let dialogRef: MdDialogRef<NewChannelDialog>;
    let config = new MdDialogConfig();
    config.viewContainerRef = viewContainerRef;

    dialogRef =  this.dialog.open(NewChannelDialog, config);

    return dialogRef.afterClosed();
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
