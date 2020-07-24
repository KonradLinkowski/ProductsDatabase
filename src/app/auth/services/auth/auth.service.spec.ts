import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

let service: AuthService;

describe('AuthService', () => {
  beforeEach(() => service = new AuthService());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
