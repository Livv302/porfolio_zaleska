import { Component } from '@angular/core';
import { IGallery } from './interfaces/IGallery';
import { Galleries } from './constants/galleries.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string;
  description: string;
  galleries: IGallery[];
  trackByUserId(index: number, user: any): 
number {
return user.id;
}
searchValue: string;

  constructor() {
    this.title = 'Moje podróże - Liwia Załęska';
    this.description = 'lubie jeżdzić';
    this.galleries = Galleries;
    this.searchValue = '';
  }

}

