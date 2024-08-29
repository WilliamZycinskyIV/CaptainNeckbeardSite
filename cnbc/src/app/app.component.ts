import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// const backgroundImage = require('../../public/assets/shipSil.png');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // backgroundImage = backgroundImage;
  title = 'cnbc';

  constructor() {}
}