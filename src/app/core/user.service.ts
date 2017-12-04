import {Injectable, Optional} from '@angular/core';

let nextId = 1;

export class UserServiceConfig {
  userName = 'Ian Su';
}

@Injectable()
export class UserService {
  id = nextId ++;
  private _userName = 'Peter Lee';

  constructor(@Optional() config: UserServiceConfig) {
    if (config) {
      this._userName = config.userName;
    }
  }

  get userName() {
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._userName  + suffix;
  }
}