import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-table',
  templateUrl: './log-table.component.html',
  styleUrls: ['./log-table.component.css']
})
export class LogTableComponent implements OnInit {

 isSubmitted = false;
logData:any;
selected!:string[];

levels: String[] = ['INFO','DEBUG','ERROR','WARN'];

submitForm(form: NgForm) {
  this.isSubmitted = true;
  if(form.valid) {
   console.log("level type ");
   console.log(form.value.level);
   this.getLogContentByLevel(form.value.level)
   
  } 
}

getLogContentByLevels(){

  this.apiService.getContentByLogLevels(this.selected).subscribe((res)=>{
    console.log('getContentByLogLevel recieved');
    console.log(res);
    //this.ingredients = res;
    this.logData = res;
  })

}

getLogContentByLevel(level:string){

  this.apiService.getContentByLogLevel(level).subscribe((res)=>{
   
    this.logData = res;
  })

}


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

}
