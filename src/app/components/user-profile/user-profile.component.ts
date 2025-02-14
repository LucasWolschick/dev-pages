import { Component, inject, Input } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  userService: UserService = inject(UserService);
  user?: User;

  @Input()
  set id(userId: string) {
    this.userService.findUser(Number(userId)).then((user: User | undefined) => {
      this.user = user;
    });
  }
}
