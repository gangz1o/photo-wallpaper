import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, ButtonModule],
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
