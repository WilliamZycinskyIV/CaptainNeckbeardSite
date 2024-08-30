import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideRouter, Router, RouterOutlet } from '@angular/router';
import { routes } from './app-routing.module';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    SharedModule,
    CoreModule,


  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
