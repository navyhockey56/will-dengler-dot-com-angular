import { Component, OnInit, Input } from '@angular/core';

import { mapToMessage } from '../../_classes/message';
import { MessageService } from '../../_services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /*
    TODOS
    - Add email validation
    - Add email icon
  */

  // @Input() email;

  // Indicates that message creation succeeded
  successMessage: boolean = false;
  // Indicates that we failed to create a message
  failedMessage: boolean = false;
  // Stores the error message to be displayed when message creation fails
  errorMessage: string;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  /**
    Sends the message defined by the contact page to the server.
    @param [string] email (Optional) - The email to respond to the message with
    @param [string] body - The content of the message
  */
  saveMessage(email: string, body: string): void {
    // Make sure there's a message body
    if (!body || body.length <= 0) {
      // Open failed message popup
      this.errorMessage = "Looks like you forgot to enter your message";
      this.failedMessage = true;
      return;
    }

    // TODO: Add email validation
    // if (!this.email.validate()) {
    //   this.failedMessage = true;
    //   this.errorMessage = "Invalid email format";
    //   return;
    // }

    // Create the message to be sent
    let message = mapToMessage({ email: email, message: body });

    // Create the message
    this.messageService.createMessage(message, this.handleMessageError()).subscribe( message => {
      if (!message) {
        // Message creation failed - make sure error popup opens
        this.failedMessage = true;
        return;
      }

      // Message was created successfully - open success popup
      this.successMessage = true;
    });;
  }

  /**
    Removes the failed message popup from view
  */
  exitFailedMessage(): void {
    this.failedMessage = false;
  }

  /**
    Removes the success message popup from view
  */
  exitSuccessMessage(): void {
    this.successMessage = false;
  }

  /**
    Handles any errors from the messageService.
  */
  private handleMessageError() {
    return (error: any) => {
      if (!error || !error.status) {
        // Unknown error
        this.errorMessage = "An error occurred while creating your message.";
      } else if (error.status == 406) {
        // Invalid email or message too long
        this.errorMessage = error.error.message;
      } else {
        // Unknown error
        this.errorMessage = "An error occurred while creating your message.";
      }

      // Open failed message popup
      this.failedMessage = true;
    }
  }

}
