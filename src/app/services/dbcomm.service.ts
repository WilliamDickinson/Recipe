import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Instruction } from '../models/Instruction';
import { Recipe } from '../models/Recipe';
import { Timer } from '../models/Timer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DbcommService {

  constructor(private http:HttpClient) { }

  createRecipe(recipe:Recipe){
    let response = this.http.post("http://ec2-3-84-73-53.compute-1.amazonaws.com:3030/createRecipe", JSON.stringify(recipe), httpOptions).toPromise().then(result =>{
      console.log(result);
    });
    return response;
  }
  updateRecipe(recipe:Recipe){
    let response = this.http.put("http://ec2-3-84-73-53.compute-1.amazonaws.com:3030/updateRecipe", recipe).toPromise().then(result =>{
      console.log(result);
    });
    return response;
  }
  getRecipes():Promise<Recipe[]>{
    let response:Promise<Recipe []> = this.http.get<Recipe []>("http://ec2-3-84-73-53.compute-1.amazonaws.com:3030/recipes").toPromise();
    return response;
  }
  deleteRecipe(recipe:Recipe){
    const url = `http://ec2-3-84-73-53.compute-1.amazonaws.com:3030/deleteRecipe/${recipe}`;
    let response = this.http.delete(url).toPromise().then(result =>{
      console.log(result);
    });
    return response;
  }

}
