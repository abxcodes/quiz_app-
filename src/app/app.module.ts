


 //
 import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
 import { FormsModule } from '@angular/forms'; // Import this line

 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
 import { QuizComponent } from './quiz/quiz.component';
 import { ResultComponent } from './result/result.component';

 @NgModule({
   declarations: [
     AppComponent,
     QuizComponent,
     ResultComponent
   ],
   imports: [
     BrowserModule,
     AppRoutingModule,
     FormsModule,
   ],
   providers: [],
   bootstrap: [AppComponent]
 })
 export class AppModule { }
