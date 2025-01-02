import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule],
  template: `
    <h1>Photo Wallpaper</h1>
    <p>Backend response: {{ message }}</p>
    <div class="card flex justify-center">
      <p-button label="Check" />
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  message = 'Testing connection...';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.testConnection().subscribe({
      next: response => {
        this.message = response;
      },
      error: error => {
        this.message = 'Error connecting to backend: ' + error.message;
      },
    });
  }
}
