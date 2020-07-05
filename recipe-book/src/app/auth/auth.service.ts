import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface AuthResponseData {
  kind: string
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
  registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {}
  
  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBqLDRd0weqrY4oRJ7piXq2ThNMeOBOi-Y',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    )
    .pipe(catchError(errorRes => {
      let errorMessage = 'An error occured!'
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage)
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email already exists'
      }
      return throwError(errorMessage)
    }))
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqLDRd0weqrY4oRJ7piXq2ThNMeOBOi-Y',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    )
  }

}