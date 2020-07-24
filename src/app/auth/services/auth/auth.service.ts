import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, empty, EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { user as userMock } from './user.mock';

@Injectable()
export class AuthService {

  constructor() {
    this.loadUser();
  }

  private readonly storageKey = 'current-user';
  currentUser = new BehaviorSubject<User>(null);

  login(username: string, password: string): Observable<User> {
    return of(userMock).pipe(
      tap(user => {
        this.currentUser.next(user);
        this.saveUser();
      })
    );
  }

  logout(): Observable<void> {
    this.currentUser.next(null);
    return EMPTY;
  }

  isAuthenticated() {
    return !!this.currentUser.value;
  }

  private saveUser() {
    const item = JSON.stringify(this.currentUser.value);
    localStorage.setItem(this.storageKey, item);
  }

  private loadUser() {
    const item = localStorage.getItem(this.storageKey);
    if (item) {
      const user: User = JSON.parse(item);
      this.currentUser.next(user);
    }
  }
}
