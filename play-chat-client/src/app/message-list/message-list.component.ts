import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { messages, Message } from '../message';
import { MessageForm } from '../message-form';
import { MessageService } from '../message.service';
import { Channel } from '../channel';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  providers: [MessageService]
})
export class MessageListComponent implements OnInit {

  @Input() inputChannel: Channel;
  channel: Channel;
  messageForm: MessageForm;
  messages: Message[];
  private interval;

  constructor(private _messageService: MessageService) { }

  // messages: Message[] = [
  //    new Message(1, new Date(), "test", "John"),
  //    new Message(2, new Date(), "test2", "Bill")
  // ];;

  ngOnInit() {
    if(this.channel != null) {
      this.messageForm = new MessageForm("", "John", this.channel.channelId);
      this.fetch();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.channel !== this.inputChannel) {
      clearInterval(this.interval);
      this.messages = [];
      this.channel = this.inputChannel;
      this.ngOnInit();
    }
  }

  fetch() {
    if(this.channel != null) {
      this.interval = setInterval(() => {
        this._messageService
          .fetch(this.channel.channelId)
          .subscribe(
            messages => this.messages = messages,
            error => console.log(error) 
          );
      }, 2000);
    }
  }

  onSubmit() {
    this._messageService
      .post(this.messageForm)
      .subscribe(
          success => this.messageForm = new MessageForm("", "John", this.channel.channelId),
          error => alert("failed to post message")
        );
    this.fetch();
  }

}
