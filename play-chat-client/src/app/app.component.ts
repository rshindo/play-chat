import { Component } from '@angular/core';

import {messages} from './message';


@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  selector: 'app-root',
})
export class AppComponent {
  title = 'app works!';

  ngOnInit() {
  	console.log(messages);
  }
}
