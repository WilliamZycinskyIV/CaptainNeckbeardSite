import { Injectable } from '@angular/core';

import { Comic } from '../models/comic.type';
import { comics } from '../models/fakeComicsData';


@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor() { }

  getComics(): Comic[] {
    return comics;
  }

  // Move this to backend when implemented, No need to pull all the comics here to sort them, query the most recent.
  getNewestComic(): Comic {
    function comicDateSort(a: Comic, b: Comic){
      return b.releaseDate.getTime() - a.releaseDate.getTime();
    }

    return comics.sort(comicDateSort)[0];
  }


}

