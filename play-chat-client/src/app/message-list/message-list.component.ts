import { Component, OnInit } from '@angular/core';

import {messages, Message} from '../message';
import {MessageForm} from '../message-form';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  providers: [MessageService]
})
export class MessageListComponent implements OnInit {

	messageForm: MessageForm;
	messages: Message[];


	constructor(private _messageService: MessageService) { }

	// messages: Message[] = [
	// 	new Message(1, new Date(), "test", "John"),
	// 	new Message(2, new Date(), "test2", "Bill")
	// ];;

	ngOnInit() {
		this.messageForm = new MessageForm("", "John");
		this.fetch();
	}

	fetch() {
		this.messages = this._messageService.messages;
	}

	onSubmit() {
		this._messageService.post(this.messageForm);
		this.messageForm = new MessageForm("", "John");
		this.fetch();
	}

}
