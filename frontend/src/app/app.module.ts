import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { provideRouter,RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    RouterLink, 
    RouterLinkActive,

  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
