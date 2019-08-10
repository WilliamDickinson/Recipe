import { Component, OnInit } from '@angular/core';
import { Instruction } from 'src/app/models/Instruction';
import { Recipe } from 'src/app/models/Recipe';
import { Timer } from 'src/app/models/Timer';


@Component({
  selector: 'app-createrecipe',
  templateUrl: './createrecipe.component.html',
  styleUrls: ['./createrecipe.component.css']
})
export class CreaterecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // rowInsertion() {
  //   let table: HTMLTableElement = <HTMLTableElement>
  //   let row = table.insertRow(-1);
  //   let testcell = row.insertCell(0);
  //   testcell.innerHTML = "New Test Instruction";
  // }

  // start with empty array -> push instructions into the array
  //    options for issub, how much time in timer
  // submit recipe

  timers: Array<Timer> = [];
  
  instruction:Instruction = new Instruction(0,null,false,"description",0);
  instructions: Array<Instruction> = [];

  recipe:Recipe = new Recipe(0,"This is a title",this.instructions);

  id:number = 0;
  description:string = "Description";
  hourInput:number = 0;
  minuteInput:number = 0;
  secInput:number = 0;
  // totalTime:number = ((3600000 * this.hourInput) + (60000 * this.minuteInput) + (1000 * this.secInput));
  // calculate time into total time in milliseconds

  // push inputs to an Instruction array
  // push Instruction object to 'instructions' array
  public createSuperRow() {

    let totalTime:number = ((3600000 * this.hourInput) + (60000 * this.minuteInput) + (1000 * this.secInput));
    let newId:number = this.id;

    let newInstruction = new Instruction(++newId, null, false, this.description, totalTime);
    this.id=newId;

    this.instructions.push(newInstruction);

  }

  public createSubRow() {
    let totalTime:number = ((3600000 * this.hourInput) + (60000 * this.minuteInput) + (1000 * this.secInput));
    let newId:number = this.id;

    let newInstruction = new Instruction(++newId, null, true, this.description, totalTime);
    this.id=newId;

    this.instructions.push(newInstruction);
  }

  public submitRecipe() {

  }

}
