 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
 
@Injectable()
export class ApiService {
 
  baseURL: string = "http://localhost:8080/";
 
  constructor(private http: HttpClient) {
  }
 
  getAllRecipes(): Observable<any> {
    return this.http.get(this.baseURL + 'recipe/recipes')
  }
 
  getAllIngredients():Observable<any> {
    return this.http.get(this.baseURL + 'recipe/ingredients')
  }

  getRecipesByIngredients(ingrs:string[]):Observable<any>{

    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify(ingrs); 
    console.log("body: "+body);
    return this.http.post(this.baseURL + 'recipe/recipesByIngredients',body,{'headers':headers});
}

getContentByLogLevels(levels:string[]):Observable<any> {
    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify(levels); 
    console.log("body: "+body);
    return this.http.post(this.baseURL + 'log/content',body,{'headers':headers});
  }

  getContentByLogLevel(level:string):Observable<any> {
   
    return this.http.get(this.baseURL + 'log/content/'+level);
  }


}