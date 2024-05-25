import { Component } from '@angular/core';
import { Comic } from '../../models/comic';
import { ComicService } from '../../services/comic.service';

@Component({
  selector: 'home-weekly-comic',
  standalone: true,
  imports: [],
  templateUrl: './weekly-comic.component.html',
  styleUrl: './weekly-comic.component.css'
})
export class WeeklyComicComponent {
  
  mostRecentComic!: Comic;

  constructor(private comicService: ComicService) {}

  ngOnInit(): void {
    this.mostRecentComic = this.comicService.getRecentComic();
  }

}
