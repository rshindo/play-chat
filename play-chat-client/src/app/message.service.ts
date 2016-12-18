import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import { Message, messages } from './message';
import { MessageForm } from './message-form';

@Injectable()
export class MessageService {

	private url = 'http://localhost:8080/api/channel/${channelId}/messages';

	constructor(private http: Http) { }

	post(newMessageForm: MessageForm): Observable<String> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		let json = JSON.stringify(newMessageForm);
		let url = this.url.replace('${channelId}', newMessageForm.channelId.toString());
		return this.http.put(url, json, options)
			.catch(this.handleError);
	}

	fetch(channelId: number): Observable<Message[]> {
		return this.http.get(this.url.replace('${channelId}', '1'))
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		var messages = [];
		for(var i = 0; i < body.length; i++) {
			let obj = body[i];
			messages.push(new Message(
				obj.messageId, 
				new Date(obj.postedTime),
				obj.text,
				obj.userId));
		}
		return messages || [];
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
