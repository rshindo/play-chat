import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
  providers: [MessageService]
})
export class PostFormComponent implements OnInit {

  constructor(private _messageService: MessageService) { }

  ngOnInit() {
  }

  post() {
  	this._messageService.post("aaaaa");
  }

}
