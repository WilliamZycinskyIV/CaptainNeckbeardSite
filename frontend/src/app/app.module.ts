import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../../../frontend/src/app/footer/footer.component';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { WeeklyComicComponent } from './home/weekly-comic/weekly-comic.component';
import { provideRouter, Router, RouterOutlet } from '@angular/router';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    WeeklyComicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FooterComponent,
    RouterOutlet,

  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
