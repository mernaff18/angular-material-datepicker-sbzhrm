import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

/** @title Datepicker with custom formats */
@Component({
  selector: 'datepicker-formats-example',
  templateUrl: 'datepicker-formats-example.component.html',
  styleUrls: ['datepicker-formats-example.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class DatepickerFormatsExampleComponent {
   
    minDate = new Date()
    getdates = new Date();
    getDateOnchange = new Date();   
    myDate:any;  
    dateForm: FormGroup;
    submitted = false;  
    great = false;  
    timeDiff :any;
    daysDiff :any;
    EtimeDiff :any;
    EdaysDiff :any;
    findEdate : any;
    blockendDate:any;
    edates = new Date("3 may 9999"); 
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.dateForm = this.formBuilder.group({
            sdate: [this.minDate, Validators.required],
            edate: [this.edates, Validators.required],           
        });
        this.firstFormGroup = this.formBuilder.group({
         firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this.formBuilder.group({
          secondCtrl: ['', Validators.required]
        });
        this.myDate = new Date(this.getdates.setDate(this.getdates.getDate() +1)); 
        this.timeDiff = this.myDate.getTime() - this.minDate.getTime();
        this.daysDiff = this.timeDiff / (1000 * 3600 *24);
        };
        
 /* dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value) {
         return {
         errormessage :"End date should be greater than Start Date"
        };
      }
      return {
        
      };
    }
}*/
    // convenience getter for easy access to form fields
    get f() {return this.dateForm.controls;}
    onSubmit() {
        this.submitted = true;        
        if (!this.dateForm.invalid) {
            console.log("success")
        }
        else{
          console.log("error")
        }
    }

    addStartDate(event){
      this.EdaysDiff = 0;
      this.findEdate = event;
      this.EtimeDiff = this.findEdate.getTime() - this.minDate.getTime();
      this.EdaysDiff = Math.ceil(this.EtimeDiff / (1000 * 3600 * 24));
      if(this.EdaysDiff <=0){
         this.minDate = new Date();
         this.getdates = new Date();
         this.myDate = new Date(this.getdates.setDate(this.getdates.getDate() +1));         
         this.EdaysDiff = 0;
      }
      else
      {
        this.getdates = new Date();
        this.myDate = new Date(this.getdates.setDate(this.getdates.getDate() + this.EdaysDiff + 1));        
      }
    }
}
