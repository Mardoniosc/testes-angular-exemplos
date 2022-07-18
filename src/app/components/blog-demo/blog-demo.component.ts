import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-demo',
  templateUrl: './blog-demo.component.html',
  styleUrls: ['./blog-demo.component.scss'],
})
export class BlogDemoComponent implements OnInit {
  isOn = false;

  constructor() {}

  ngOnInit(): void {}

  clicked() {
    this.isOn = !this.isOn;
  }

  get message() {
    return `A landapada está ${this.isOn ? 'Ligada' : 'Desligada'}`;
  }
}
