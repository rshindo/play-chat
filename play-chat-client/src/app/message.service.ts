import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import {Message, messages} from './message'

@Injectable()
export class MessageService {

	private _messages: Message[] = messages;

	constructor() { }

	post(text: string) {
		let newMessage = new Message(0, new Date, text, 'John');
		this._messages.push(newMessage);
	}

	get messages(): Message[] {
		// return this._messages.sort((a, b) => a.postedTime.getTime() - b.postedTime.getTime());
		return messages;
	}

}
