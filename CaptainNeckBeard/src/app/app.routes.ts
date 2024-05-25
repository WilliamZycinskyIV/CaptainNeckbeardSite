import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';

export const routes: Routes = [
    {
        path: 'home',
        title: "Home: Captain Neckbeard ",
        component: HomeComponent,
    },
    {
        path: "library",
        title: "Library: Captain Neckbeard",
        component: LibraryComponent,
    },
    { 
        path: '',   redirectTo: '/home', pathMatch: 'full' 
    },
];
