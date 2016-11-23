import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { Message, messages } from './message';
import { MessageForm } from './message-form';

@Injectable()
export class MessageService {

	private _messages: Message[] = messages;

	constructor() { }

	post(newMessageForm: MessageForm) {
		let newMessage = new Message(0, new Date, newMessageForm.text, newMessageForm.postedBy);
		this._messages.push(newMessage);
	}

	get messages(): Message[] {
		// return this._messages.sort((a, b) => a.postedTime.getTime() - b.postedTime.getTime());
		return this._messages;
	}

}
