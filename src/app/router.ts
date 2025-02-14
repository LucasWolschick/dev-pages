import { Routes } from '@angular/router';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent,
  },
  {
    path: 'users/:id/profile',
    component: UserProfileComponent,
  },
];
