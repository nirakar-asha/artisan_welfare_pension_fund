import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Orissa Khadi & Polyvastra Artisan';

  // Dummy gallery images (replace with real asset paths)
  galleryImages = [
    { src: '/images/gandhi_charakha.jpg', caption: 'Handwoven Khadi Fabrics' },
    { src: '/images/KVIC.jpg', caption: 'Artisans at Work' },
  ];

  // Dummy leadership data
  leadership = [
    {
      name: 'Shri Bibhuti Bhusan Mohanty',
      role: 'Chairman',
      photo: '/images/leader_photo.png',
    },
    {
      name: 'Smt. Anjali Patnaik',
      role: 'Vice President',
      photo: '/images/leader_photo.png',
    },
    {
      name: 'Shri Ramesh Chandra Sahoo',
      role: 'Secretary',
      photo: '/images/leader_photo.png',
    },
  ];

  loginErrorMessage = '';

  constructor(private router: Router) {}

  onLoginAttempt(result: { success: boolean; message: string }): void {
    if (result.success) {
      this.loginErrorMessage = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.loginErrorMessage = result.message;
    }
  }
}
