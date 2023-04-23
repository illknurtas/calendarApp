import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AccountService } from '../services/account.service';

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
  
  constructor(private cdRef: ChangeDetectorRef,
    private accountService: AccountService,
    private router: Router){
    moment.locale('tr');
    const today = moment();
    this.currentWeek = today.week();

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

  // ngOnInit() {
  //     if(!this.accountService.isLoggedIn()){
  //       this.router.navigate(['login']);
  //     }
  // }
  // previous week button
  goPreviousWeek(){
    this.currentWeek-=1;
    this.weekDays=[];
    for(let i = 1; i <= 7; i++){
      this.weekDays.push(moment().week(this.currentWeek).weekday(i).format("DD"));
    }
  }

  // next week button
  goNextWeek(){
    this.currentWeek+=1;
    this.weekDays=[];
    for(let i = 1; i <= 7; i++){
      this.weekDays.push(moment().week(this.currentWeek).weekday(i).format("DD"));
    }
    this.cdRef.detectChanges();
  }
  // display current date 
  goCurrentDate(){
    const clickedDate = moment();
    this.currentDate = clickedDate.format("DD/MM/YYYY");
  }
}
