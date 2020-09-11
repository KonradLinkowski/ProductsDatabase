import { Injectable } from '@angular/core';
import { Observable, defer, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(private router: Router, private fireAuth: AngularFireAuth) {}

  register(email: string, password: string): Observable<auth.UserCredential> {
    return defer(() =>
      from(
        this.fireAuth.auth
          .setPersistence(auth.Auth.Persistence.LOCAL)
          .then(() =>
            this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
          )
      )
    );
  }

  login(email: string, password: string): Observable<auth.UserCredential> {
    return defer(() =>
      from(
        this.fireAuth.auth
          .setPersistence(auth.Auth.Persistence.LOCAL)
          .then(() =>
            this.fireAuth.auth.signInWithEmailAndPassword(email, password)
          )
      )
    );
  }

  logout(): Observable<void> {
    return defer(() =>
      from(this.fireAuth.auth.signOut()).pipe(
        tap(() => {
          this.router.navigate(['/']);
        })
      )
    );
  }

  isAuthenticated(): Observable<any> {
    return this.fireAuth.authState;
  }
}
