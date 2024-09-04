import { Component, OnInit } from '@angular/core';
import { Comic } from '../core/models/comic.type';
import { ComicsService } from '../core/services/comics.service';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  recentComic!: Comic;


  constructor (
    private comicService: ComicsService,
  ) {

  }
  ngOnInit(): void {
      this.recentComic = this.comicService.getNewestComic();
  }

}
