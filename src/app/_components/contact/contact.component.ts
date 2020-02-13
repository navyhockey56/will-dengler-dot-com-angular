import { Component, OnInit, Input } from '@angular/core';

import { mapToMessage } from '../../_classes/message';
import { MessageService } from '../../_services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() message;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  saveMessage(email: string, body: string) {
    console.log(email);
    this.messageService.createMessage(mapToMessage({ email: email, message: body })).subscribe( message => {
      if (!message) { return };

      console.log("Created message!");
      console.log(message);
    });;
  }

}
