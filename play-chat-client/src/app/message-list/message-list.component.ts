import { Component, OnInit } from '@angular/core';

import {messages, Message} from '../message';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  providers: [MessageService]
})
export class MessageListComponent implements OnInit {

	constructor(public _messageService: MessageService) { }

	// messages: Message[] = [
	// 	new Message(1, new Date(), "test", "John"),
	// 	new Message(2, new Date(), "test2", "Bill")
	// ];;

	ngOnInit() {
	}

}
