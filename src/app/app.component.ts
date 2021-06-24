import { Component } from '@angular/core';
declare const startConfetti: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countDownDate = new Date('july 1, 2021').getTime();
  weeks = 0;
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  x = setInterval(() => {
    let now = new Date().getTime();
    let distance = this.countDownDate - now;
    this.weeks = Math.floor(distance / (1000*60*60*24*7));
    this.days = Math.floor(distance % (1000*60*60*24*7) / (1000*60*60*24));
    this.hours = Math.floor(distance % (1000*60*60*24) / (1000*60*60));
    this.minutes = Math.floor(distance % (1000*60*60) / (1000*60));
    this.seconds = Math.floor(distance % (1000*60) / 1000);
  })
  // @ts-ignore
  startConfetti();
}
