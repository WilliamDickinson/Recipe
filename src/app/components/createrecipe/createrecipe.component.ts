import { Component, OnInit } from '@angular/core';
import { Instruction } from 'src/app/models/Instruction';
import { DbcommService } from 'src/app/services/dbcomm.service';
import { Recipe } from 'src/app/models/Recipe';
import { Timer } from 'src/app/models/Timer';


@Component({
  selector: 'app-createrecipe',
  templateUrl: './createrecipe.component.html',
  styleUrls: ['./createrecipe.component.css']
})
export class CreaterecipeComponent implements OnInit {

  constructor(private dbcommservice: DbcommService) { }

  ngOnInit() {
  }

  recipeName: string = "Recipe Name";

  // start with empty array -> push instructions into the array
  //    options for issub, how much time in timer
  // submit recipe

  timers: Array<Timer> = [];

  instruction: Instruction = new Instruction(0, null, false, "description", 0);
  instructions: Array<Instruction> = [];

  recipe: Recipe;

  i_id: number = 0;
  stepOrder:number = 0;
  description: string = "Description";
  hourInput: number = 0;
  minuteInput: number = 0;
  secInput: number = 0;
  // totalTime:number = ((3600000 * this.hourInput) + (60000 * this.minuteInput) + (1000 * this.secInput));
  // calculate time into total time in milliseconds

  // push inputs to an Instruction array
  // push Instruction object to 'instructions' array
  public createSuperRow() {

    let totalTime: number = ((3600000 * this.hourInput) + (60000 * this.minuteInput) + (1000 * this.secInput));
    let newId: number = this.stepOrder;

    let t: number = totalTime;

    let previnst: number;

    if (this.instructions.length === 0) {
      previnst = null;
    }
    else {
      previnst = this.instructions[this.instructions.length - 1].stepOrder;
    }

    let newInstruction = new Instruction(++newId, previnst, false, this.description, t);
    this.stepOrder = newId;

    this.instructions.push(newInstruction);

    this.description = "";
    this.hourInput = 0;
    this.minuteInput = 0;
    this.secInput = 0;

  }

  public createSubRow() {
    let totalTime: number = ((3600000 * this.hourInput) + (60000 * this.minuteInput) + (1000 * this.secInput));
    let newId: number = this.stepOrder;
    let t: number = totalTime;

    let previnst: number;

    if (this.instructions.length === 0) {
      previnst = null;
    }
    else {
      previnst = this.instructions[this.instructions.length - 1].stepOrder;
    }

    let newInstruction = new Instruction(++newId, previnst, true, this.description, t);

    this.stepOrder = newId;

    this.instructions.push(newInstruction);

    this.description = "";
    this.hourInput = 0;
    this.minuteInput = 0;
    this.secInput = 0;
  }

  public deleteInstruction(i: Instruction) {
    let index: number = this.instructions.indexOf(i, 0);
    let previnst: number = this.instructions[index].prior;
    this.instructions.splice(index, 1);


    if (index >= this.instructions.length) {
      //Do nothing
    }
    else {
      this.instructions[index].prior = previnst;
    }
  }

  public submitRecipe() {
    let newRecipe: Recipe = new Recipe(0, this.recipeName, this.instructions);
<<<<<<< HEAD

=======
    console.log(this.dbcommservice.createRecipe(newRecipe));
    console.log(JSON.stringify(newRecipe));
>>>>>>> 9a7aa7c67b7996f07ee4c545b7e6f11bbd391de0
    this.dbcommservice.createRecipe(newRecipe);
  }

  public getRecipes(){
    let response:Promise<Recipe[]> = this.dbcommservice.getRecipes();
    response.then((result)=>{
      console.log(result);
    });
  }

}
