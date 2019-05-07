import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule,MatDatepickerModule, MatInputModule, MatNativeDateModule, MatFormFieldModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DatepickerFormatsExampleComponent } from './datepicker-formats-example/datepicker-formats-example.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule 
  , MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule,MatStepperModule, ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, DatepickerFormatsExampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
