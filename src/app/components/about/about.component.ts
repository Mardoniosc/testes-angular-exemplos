import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  template: `
  <h2 highlight="skyblue">About</h2>
  <h3>Quote of the day:</h3>
  <input #box [highlight]="box.value" value="cyan" />
  `
})
export class AboutComponent { }
