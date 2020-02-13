import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';

export const SERVER_HOST = `http://${environment.serverHost}`;

export function log(message : string): void {
  console.log(message);
}

export function handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    log(`${operation} failed: ${error.message}`);
    return of(result as T);
  }
}