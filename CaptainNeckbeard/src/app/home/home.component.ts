import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { WeeklyComicComponent } from './weekly-comic/weekly-comic.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, WeeklyComicComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
