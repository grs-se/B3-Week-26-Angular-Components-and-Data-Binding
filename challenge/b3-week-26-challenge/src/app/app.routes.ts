import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: '', // Default route
    redirectTo: '/user-profile', // Redirect to user profile
    pathMatch: 'full', // Match the full URL
  },
  {
    path: 'user-profile', // User profile route
    title: 'User Profile',
    component: UserProfileComponent,
  },
];
