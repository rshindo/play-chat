import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import { Message, messages } from './message';
import { MessageForm } from './message-form';

@Injectable()
export class MessageService {

	private fetchUrl = 'http://localhost:8080/api/channel/${channelId}/messages';

	private _messages: Message[] = messages;

	constructor(private http: Http) { }

	post(newMessageForm: MessageForm) {
		let newMessage = new Message(0, new Date, newMessageForm.text, newMessageForm.postedBy);
		this._messages.push(newMessage);
	}

	fetch(channelId: number): Observable<Message[]> {
		return this.http.get(this.fetchUrl.replace('${channelId}', '1'))
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

	get messages(): Message[] {
		return this._messages;
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
