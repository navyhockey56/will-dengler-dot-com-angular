import { Component, OnInit } from '@angular/core';

import { Message } from '../../_classes/message';
import { MessageService } from '../../_services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[];
  loading = true;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getMessages();
  }

  setCredentials(username: string, password: string): void {
    this.messageService.setCredentials(username, password);
    this.getMessages();
  }

  revokeCredentials(): void {
    this.messages = null;
    this.messageService.revokeCredentials();
  }

  getMessages(): void {
    this.messageService.getMessages().subscribe( messages => {
      this.messages = messages;
      this.loading = false;
    });
  }

}
