import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-dashboard-hero',
  templateUrl: './dashboard-hero.component.html',
  styleUrls: ['./dashboard-hero.component.scss']
})
export class DashboardHeroComponent {
  @Input() hero!: Hero;
  @Output() selected = new EventEmitter<Hero>();
  click() { this.selected.emit(this.hero); }
}
