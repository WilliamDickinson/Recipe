import { Component, OnInit } from '@angular/core';
import { Timer } from 'src/app/models/Timer';
import { Observable } from 'rxjs';
import { Instruction } from 'src/app/models/Instruction';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-tryrecipe',
  templateUrl: './tryrecipe.component.html',
  styleUrls: ['./tryrecipe.component.css']
})
export class TryrecipeComponent implements OnInit {

  constructor() { }

  myinterval = null;

  timers: Array<Timer> = new Array();
  i1:Instruction = new Instruction(1,null,false,"1",null,this.timers);
  i2:Instruction = new Instruction(2,1,true,"2",30000,this.timers);
  i3:Instruction = new Instruction(3,2,false,"3",null,this.timers);
  i4:Instruction = new Instruction(4,3,false,"4.",null,this.timers);
  i5:Instruction = new Instruction(5,4,true,"5.",null,this.timers);
  i6:Instruction = new Instruction(6,5,false,"6.",null,this.timers);
  i7:Instruction = new Instruction(7,6,false,"7.",null,this.timers);
  instructions: Array<Instruction> = new Array(this.i7,this.i6,this.i3,this.i4,this.i5,this.i2,this.i1);
  recipe1:Recipe = new Recipe(1,this.instructions);


  ngOnInit() {
    this.updateTimers(this.timers);
  }

  isTest:boolean = false;

  //!!!
  public testThing(){
    this.i2.timer.togglePause();
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
