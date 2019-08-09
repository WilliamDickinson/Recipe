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

    // let lengthHour:number = Math.floor(Math.log(millToHour) / Math.LN10 + 1);
    // let lengthMinute:number = Math.floor(Math.log(millToMinute) / Math.LN10 + 1);
    // let lengthSec:number = Math.floor(Math.log(millToSec) / Math.LN10 + 1);

    return millToHour + ":" + millToMinute + ":" + millToSec;

    // if (milliseconds >= 3600000){
    //   let millToHour:number = (milliseconds / 3600000);
    //   let remainderH:number = (milliseconds % 3600000);

    //   if(remainderH >= 60000){
    //     let millToMinute:number = (remainderH / 60000);
    //     let remainderM:number = remainderH - (60000 * millToMinute);

    //     if(remainderM >= 1000){
    //       let millToSec:number = (remainderM / 1000);
    //       // let totalTime:string = remainderH + ":" + remainderM + ":" + millToSec;
    //     } 

    //     let totalTime:string = remainderH + ":" + millToMinute + ":" + remainderM;
    //   }

    //   let totalTime:string = millToHour + ":" + remainderH;
    // } 

    // return totalTime;
  }

}
