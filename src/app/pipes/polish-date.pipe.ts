import { Pipe, PipeTransform } from '@angular/core';
const MONTHS = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 
  'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 
  'listopad', 'grudzień'];

@Pipe({
  name: 'polishDate',
  standalone: false
})
export class PolishDatePipe implements PipeTransform {

  date: Date;
  monthNumber: number;
  month: string;

  constructor() {
    this.date = new Date();
    this.monthNumber = 0;
    this.month = "";
  }

  transform(value: any, args?: any): any {

    this.date = new Date(value);
    console.log('fullDate', this.date)

    this.monthNumber = this.date.getMonth();
    console.log('monthNumber', this.monthNumber)

    this.month = MONTHS[this.monthNumber];
    console.log('month', this.month)

    return this.date.getDate() + ' ' + this.month + ' ' + this.date.getFullYear();
  }

}
