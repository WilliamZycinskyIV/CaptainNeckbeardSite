import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';



@NgModule({
    declarations: [
      FooterComponent,
      NavigationBarComponent
    ],
    imports: [
      CommonModule,
      RouterOutlet, 
      RouterLink, 
      RouterLinkActive
    ],
    providers: [],
    exports: [
      CommonModule,
      FooterComponent,
      NavigationBarComponent,

    ]
})
export class SharedModule {
  constructor() {
    
  }
}