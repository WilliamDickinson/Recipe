import { Component, OnInit, Input } from '@angular/core';
import { Instruction } from 'src/app/models/Instruction';
import { Recipe } from 'src/app/models/Recipe';
import { Timer } from 'src/app/models/Timer';

@Component({
  selector: 'app-tryrecipe',
  templateUrl: './tryrecipe.component.html',
  styleUrls: ['./tryrecipe.component.css']
})
export class TryrecipeComponent implements OnInit {

  constructor() { }

  myinterval = null;

  @Input() currentrecipe: Recipe;

  timers: Array<Timer> = new Array();


  ngOnInit() {
    this.currentrecipe.instructions.forEach((i) => {
      if (i.duration != 0) {
        let t = new Timer(i.id, i.duration);
        this.timers[i.id] = t;


        // this.timers.push(t);
      }
    });

    this.myinterval = setInterval(this.updateTimers, 100);
  }

  // public getTimerCurrentTime(i: Instruction): number {
  //   this.timers.forEach((t) => {
  //     if (t.i_id === i.id) {
  //       console.log(t.timeleft);
  //       return t.timeleft;
  //     }
  //   });
  //   console.log(0);
  //   return 0;
  // }



  public togglePause(i: Instruction) {
    this.timers.forEach((t) => {
      if (t.i_id === i.id) {

        t.togglePause();
        return;
      }
    });
  }



  public updateTimers() {

    if (this.currentrecipe != null) {
      this.timers.forEach((t) => {

        t.updateTime();
      });
    }
  }

}
