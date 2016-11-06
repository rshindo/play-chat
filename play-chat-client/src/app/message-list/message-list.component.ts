import { Component, OnInit } from '@angular/core';

import {messages, Message} from '../message'

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

	messages: Message[] = [
		new Message(1, new Date(), "test", "John"),
		new Message(2, new Date(), "test2", "Bill")
	];;

	constructor() { }

	ngOnInit() {
	}

}
