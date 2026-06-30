import { Injectable } from '@angular/core';

export interface DummyUser {
  username: string;
  password: string;
  displayName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Dummy user data — replace with real API integration later
  private dummyUsers: DummyUser[] = [
    { username: 'admin', password: 'admin123', displayName: 'Administrator' },
    { username: 'chairman', password: 'khadi@123', displayName: 'Chairman' }
  ];

  private loggedInUser: DummyUser | null = null;

  login(username: string, password: string): { success: boolean; message: string } {
    const user = this.dummyUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      this.loggedInUser = user;
      return { success: true, message: 'Login successful' };
    }

    return { success: false, message: 'Invalid username or password. Please try again.' };
  }

  logout(): void {
    this.loggedInUser = null;
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  getCurrentUser(): DummyUser | null {
    return this.loggedInUser;
  }
}
