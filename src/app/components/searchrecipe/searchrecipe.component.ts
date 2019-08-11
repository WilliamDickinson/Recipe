import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { Instruction } from 'src/app/models/Instruction';

@Component({
  selector: 'app-searchrecipe',
  templateUrl: './searchrecipe.component.html',
  styleUrls: ['./searchrecipe.component.css']
})
export class SearchrecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  i1:Instruction = new Instruction(1,null,false,"1",null);
  i2:Instruction = new Instruction(2,1,true,"2",30000);
  i3:Instruction = new Instruction(3,2,false,"3",null);
  i4:Instruction = new Instruction(4,3,false,"4.",null);
  i5:Instruction = new Instruction(5,4,true,"5.",20000);
  i6:Instruction = new Instruction(6,5,false,"6.",null);
  i7:Instruction = new Instruction(7,6,false,"7.",null);
  instructions: Array<Instruction> = new Array(this.i6,this.i7,this.i3,this.i4,this.i5,this.i2,this.i1);

  r1:Recipe = new Recipe(0,"chocolate shake",null);
  r2:Recipe = new Recipe(1,"hamburger",null);
  r3:Recipe = new Recipe(2,"actual test recipe",this.instructions);
  r4:Recipe = new Recipe(3,"chicken i don't know what he said",null);
  r5:Recipe = new Recipe(4,"human",null);

  currentrecipe:Recipe = null;

  recipes:Array<Recipe> = new Array(this.r1,this.r2,this.r3,this.r4,this.r5);








}
