import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { NewChannelDialog } from './new-channel-dialog/new-channel-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    NewChannelDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  exports: [ NewChannelDialog ],
  entryComponents: [ NewChannelDialog ],
  bootstrap: [AppComponent]
})
export class AppModule { }
