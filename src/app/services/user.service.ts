import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private cache?: User[];

  constructor() {}

  async findAllUsers(): Promise<User[]> {
    if (this.cache === undefined) {
      const resp = await fetch('/data.json');
      this.cache = await resp.json();
    }
    return this.cache!;
  }

  async findUser(id: number): Promise<User | undefined> {
    const users = await this.findAllUsers();
    return users.find((u) => u.id === id);
  }
}
