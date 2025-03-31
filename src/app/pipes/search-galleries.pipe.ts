import { Pipe, PipeTransform } from '@angular/core';
import { IGallery } from '../interfaces/IGallery';

@Pipe({
  name: 'searchGalleries',
  standalone: false
})
export class SearchGalleriesPipe implements PipeTransform {

  galleries: any;
  year: number = 0;

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);

    this.galleries = value;
    if(args) {
        this.galleries = this.galleries.filter((gallery: IGallery) => {
          return (gallery.title.indexOf(args) !== -1) || (gallery.description.indexOf(args) !== -1);
        })
        console.log(this.galleries)
  } else {
    this.galleries = value;
  }
  return this.galleries;
}

}
