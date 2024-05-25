import { Injectable } from '@angular/core';
import { Comic } from '../models/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicService {


  constructor() { }


  getRecentComic(): Comic {


    return {
      title: "The Latest Adventure",
      description: "The most recent comic in the series, featuring exciting new developments.",
      imageUrl: "assets/images/placeHolderImage.jpg",
      date: new Date(),
      isSquare: true,
    };
  }
}
