import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public counters = [];

  ngOnInit(): void {
    this.counters = GenerateCounters(25);
  }

}

export function GenerateCounters(numberOfCounters: number): Array<any> {
  var i;
  var arr = [];
  for (i = 0; i < numberOfCounters; i++) {
    arr.push({start: GetRandomArbitrary(0, 100), end: GetRandomArbitrary(101, 500), interval: GetRandomArbitrary(0, 10)})
  }

  return arr;
}

export function GetRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
