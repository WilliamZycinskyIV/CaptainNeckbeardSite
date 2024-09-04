import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
      path: 'home',
      title: "Home: Captain Neckbeard ",
      component: HomeComponent,
  },
  {
      path: "library",
      title: "Library: Captain Neckbeard",
      component: HomeComponent,
  },
  { 
      path: '', redirectTo: 'home', pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
