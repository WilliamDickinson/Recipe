import { Component, OnInit, Input } from '@angular/core';
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

  @Input() currentrecipe:Recipe;





  ngOnInit() {
    this.myinterval = setInterval(this.updateTimers,100);
  }

  isTest:boolean = false;

  //!!!
  public togglePause(i:Instruction){
    // i.timer.togglePause();
  }

  

  public updateTimers() {
<<<<<<< HEAD

    if (this.currentrecipe != null) {
      this.timers.forEach((t) => {

        t.updateTime();
      });
    }
=======
    // if (this.currentrecipe != null) {
    //   this.currentrecipe.instructions.forEach((i) => {
    //     let t = i.timer;
    //     if(t != null){
    //       t.updateTime();
    //     }
    //   });
    // }
>>>>>>> 9a7aa7c67b7996f07ee4c545b7e6f11bbd391de0
  }

}
