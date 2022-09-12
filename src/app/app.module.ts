import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeTableComponent } from './recipe-table/recipe-table.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from '@angular/forms';
import { LogTableComponent } from './log-table/log-table.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeTableComponent,
    LogTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
