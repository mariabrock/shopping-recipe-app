import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken:	string;
  email:	string;
  refreshToken:	string;
  expiresIn:	string;
  localId:	string;
  registered?: boolean;
}
// export this interface for use in the auth component authObservable

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  // private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) { }

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBASvz74I5_XBbz78_H3v0HN_x9cnF6Xn4',
        {
          email: email,
          password: password,
          returnSecureToken: true
        })
    .pipe(catchError(this.handleError),
      tap(resData => {
        this.handleAuthentication(resData.email, resData.localId,resData.idToken, +resData.expiresIn)
      })
    );
  }

  login(email: string, password: string) {
    return this.http
  .post<AuthResponseData>(
    'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBASvz74I5_XBbz78_H3v0HN_x9cnF6Xn4',
    {
      email: email,
      password: password,
      returnSecureToken: true
      }
    )
      .pipe(catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(resData.email, resData.localId,resData.idToken, +resData.expiresIn)
        })
      );
  }

  private handleAuthentication(email: string, userId: string,  token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Oops. An unknown error has occurred.';
    if(!errorRes.error || !errorRes.error.error) {
      return throwError(() => errorMessage);
    }
    switch(errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Sorry, that email already exists. Please login instead!'
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(() => errorMessage);
  }
// now we have handled errors for both of our form states
}
