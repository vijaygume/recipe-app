import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/Recipe';
import { HttpClient } from '@angular/common/http';
import {ApiService} from '../api.service'


@Component({
  selector: 'app-recipe-table',
  templateUrl: './recipe-table.component.html',
  styleUrls: ['./recipe-table.component.css']
})
export class RecipeTableComponent implements OnInit {

  displayedColumns: string[] = [
    'title',
    'href',
    'ingredients',
    'thumbnail',
    
  ];
  recipeData: any;
  ingredients: any;

  selected!:string[];

getAllRecipes(){
 this.apiService.getAllRecipes().subscribe( (response) => { 
  console.log('getAllRecipes response received')
  console.log(response);
  this.recipeData = response; 
})  
}

getAllIngredients(){
  this.apiService.getAllIngredients().subscribe((res)=>{
    console.log('getAllIngredients recieved');
    console.log(res);
    this.ingredients = res;
  })
}

getRecipesByIngredients(){
  this.apiService.getRecipesByIngredients(this.selected).subscribe((res)=>{
    console.log('getRecipesByIngredients recieved');
    console.log(res);
    //this.ingredients = res;
    this.recipeData = res;
  })
}
 
  

 // dataSource = new MatTableDataSource(this.recipeData);

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    //this.getRecipesByIngredients();
   this.getAllIngredients();
  }

}
