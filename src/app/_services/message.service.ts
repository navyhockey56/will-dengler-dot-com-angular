import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Message, mapToMessage, mapToMessages } from '../_classes/message';

import { SERVER_HOST, handleError, log } from './service-helper';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private credentials : string;

  constructor(
    private http: HttpClient
  ) { }

  setCredentials(email, password): string {
    this.credentials = btoa(`${email}:${password}`);
    localStorage.setItem('credentials', this.credentials);
    return this.credentials;
  }

  revokeCredentials(): void {
    this.credentials = null;
    localStorage.removeItem('credentials');
  }

  private getCredentials(): string {
    if (!this.credentials) {
      this.credentials = localStorage.getItem('credentials');
    }
    return this.credentials;
  }

  loggedIn() {
    return this.getCredentials() !== null;
  }

  createMessage(message: Message, errorHandler?): Observable<Message> {
    return this.http.post<Message>(
      `${SERVER_HOST}/message`, message.toJson()
    ).pipe(
      map( (data : any) => mapToMessage(data)),
      tap ( _ => log(`Created Message ${message.message}`)),
      catchError(handleError<Message>('createMessage', errorHandler))
    );
  }

  getMessages(): Observable<Message[]> {
    if (!this.getCredentials()) {
      return of(null);
    }

    return this.http.get<Message[]>(
      `${SERVER_HOST}/messages`,
       { headers: new HttpHeaders({ Authorization: `Basic ${this.credentials}` }) }
    ).pipe(
      map( (data : any[]) => mapToMessages(data)),
      tap ( _ => log(`Fetched messages`)),
      catchError(handleError<Message[]>('getMessages'))
    );
  }
}
