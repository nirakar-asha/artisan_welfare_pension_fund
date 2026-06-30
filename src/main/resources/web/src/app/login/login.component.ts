import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  @Output() loginAttempt = new EventEmitter<{ success: boolean; message: string }>();

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    if (!this.username || !this.password) {
      this.loginAttempt.emit({
        success: false,
        message: 'Please enter both username and password.',
      });
      return;
    }

    const result = this.authService.login(this.username, this.password);
    this.loginAttempt.emit(result);

    if (!result.success) {
      this.password = '';
    }
  }
}
