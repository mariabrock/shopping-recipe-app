import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
  idToken:	string;
  email:	string;
  refreshToken:	string;
  expiresIn:	string;
  localId:	string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBASvz74I5_XBbz78_H3v0HN_x9cnF6Xn4',
        {
          email: email,
          password: password,
          returnSecureToken: true
        })
    .pipe(catchError(errorRes => {
      let errorMessage = 'Oops. An unknown error has occurred.';
      if(!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
        errorMessage = 'Sorry, that email already exists. Please login instead!'
      }
      return throwError(errorMessage);
    }))
  }

}
