import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import * as moment from 'moment';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent {
  currentWeek: number;
  currentDate: string;
  dayNames: string[];
  weekDays: string[];
  currentMonth: string;

  constructor(private cdRef: ChangeDetectorRef){
    // moment.locale('tr');
    const today = moment();
    this.currentWeek = today.week();
    this.currentMonth = today.format("MMMM"); // current month

    // day names
    this.dayNames = [];
    for(let i = 0; i <=6;i++){
      this.dayNames.push(moment().weekday(i).format("dddd"));
    }

    // week days as date 
    this.weekDays = [];
    for(let i = 0; i <= 6; i++){
      this.weekDays.push(moment().weekday(i).format("DD"));
    }

    // current date 
    this.currentDate = today.format("DD/MM/YYYY");
  }

  goPreviousWeek(){
    this.currentWeek-=1;
    this.weekDays=[];
    for(let i = 1; i <= 7; i++){
      this.weekDays.push(moment().week(this.currentWeek).weekday(i).format("DD"));
    }
    this.currentMonth = moment().week(this.currentWeek).format("MMMM");
  }

  // next week button
  goNextWeek(){
    this.currentWeek+=1;
    this.weekDays=[];
    for(let i = 1; i <= 7; i++){
      this.weekDays.push(moment().week(this.currentWeek).weekday(i).format("DD"));
    }
    this.currentMonth = moment().week(this.currentWeek).format("MMMM");
    this.cdRef.detectChanges();
  }
  // display current date 
  goCurrentDate(){
    const clickedDate = moment();
    this.currentDate = clickedDate.format("DD/MM/YYYY");
    this.currentMonth = clickedDate.format("MMMM");
    
  }
}
