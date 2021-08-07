import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: `
  <ng-progress
    [direction]="'leftToRightIncreased'"
    [color]="'#4286f4'"
    [trickleSpeed]="500"
    [thick]="true"
    [ease]="'easeInSine'"
    >
  </ng-progress>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor(
  ) {
  }

  ngOnInit() {
  }
}
