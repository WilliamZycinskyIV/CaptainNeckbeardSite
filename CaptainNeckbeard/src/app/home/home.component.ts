import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { WeeklyComicComponent } from './weekly-comic/weekly-comic.component';
import { AboutComponent } from './about/about.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, WeeklyComicComponent, AboutComponent, NavigationBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
