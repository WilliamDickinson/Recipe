import { Component, OnInit } from '@angular/core';
import { Timer } from 'src/app/models/Timer';
import { Observable } from 'rxjs';
import { Instruction } from 'src/app/models/Instruction';



@Component({
  selector: 'app-createrecipe',
  templateUrl: './createrecipe.component.html',
  styleUrls: ['./createrecipe.component.css']
})
export class CreaterecipeComponent implements OnInit {

  constructor() { }

  myinterval = null;

  timers: Array<Timer> = new Array();
  i1:Instruction = new Instruction("Eat a burger, skip cooking.",false,2000,this.timers);
  i2:Instruction = new Instruction("Eat a burger, skip cooking.",false,2000,this.timers);
  i3:Instruction = new Instruction("Eat a burger, skip cooking.",false,2000,this.timers);



  ngOnInit() {
    this.updateTimers(this.timers);
  }

  //!!!
  public testThing(){
    console.log(this.timers);
  }


  public updateTimers(timers) {
    if (this.myinterval === null) {
      this.myinterval = setInterval(function () {
        timers.forEach((t) => {
          if(!t.ispaused){
            t.updateTime();
            t.timelast = (new Date()).getTime();

            if(t.timeleft <= 0){
              t.togglePause();
              t.timeleft = t.timetotal;
              console.log("A timer has finished.");
            }
          }
        });
      }, 100);
    }
  }
}
