import { Component, inject } from '@angular/core';
import { UserCard } from '../user-card/user-card.component';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
  imports: [UserCard],
})
export class UsersPageComponent {
  userList: User[] = [];
  userService: UserService = inject(UserService);

  constructor() {
    this.userService.findAllUsers().then((data) => {
      this.userList = data;
    });
  }
}
