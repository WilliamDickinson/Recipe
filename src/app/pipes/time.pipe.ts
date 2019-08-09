import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  // public pad(num:number, size:number): string {
  //   let s = num + "";
  //   while (s.length < size) {
  //     s = "0" + s;
  //     return s;
  //   }
  // }

  transform(milliseconds : number): string {

    // let totalTime:number = 0;

    let millToHour:number = Math.floor(milliseconds / 3600000);
    let remainder:number = (milliseconds % 3600000);

    let millToMinute:number = Math.floor(remainder / 60000);
    remainder = (remainder % 60000);

    let millToSec:number = Math.floor(remainder / 1000);
    remainder = (remainder % 1000);

    let hours:string = "";
    if(millToHour <= 9) hours += "0";
    hours += millToHour;

    let minutes:string = "";
    if(millToMinute <= 9) minutes += "0";
    minutes += millToMinute;

    let secs:string = "";
    if(millToSec <= 9) secs += "0";
    secs += millToSec;


    return hours + ":" + minutes + ":" + secs;

  }

}
