import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';

export const SERVER_HOST = `https://${environment.serverHost}`;

export function log(message : string): void {
  console.log(message);
}

/**
  Handles HTTP errors. Allows for passing of an `errorHandler`
  which should be a callable object that consumes the HTTP error.

  @param [string] operation - The name of the operation that failed (for logging purpuses).
  @param [null | error -> ()] errorHandler - A callable object that consumes the error.
  @return [Observable<null>] Null.
*/
export function handleError<T> (operation : string = '?', errorHandler?) {
  return (error: any): Observable<T> => {
    log(`${operation}() failed: ${error.message}`);

    // If an errorHandler was provided then pass the error to it.
    if (errorHandler) {
      errorHandler(error);
    }

    return of(null);
  }
}