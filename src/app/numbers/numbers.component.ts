import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  counter = 0;
  allCounters() {
    const a = setInterval(() => {
      this.counter++;
      if (this.counter === 100) {
        clearInterval(a);
      }
    }, 50);
  }
  constructor() {
    this.allCounters();
  }
  ngOnInit() {
  }

}
