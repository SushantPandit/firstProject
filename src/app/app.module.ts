import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import {SortPipe } from './app.sort';
import {SortDescending } from './app.descendingSort'
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { CheckNumberPipe } from './check-number.pipe';


@NgModule({
  declarations: [
    SortPipe,
    SortDescending,
    AppComponent,
    DemoComponent,
    SuccessMessageComponent,
    WarningMessageComponent,
    CheckNumberPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
