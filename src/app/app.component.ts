import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private activeColor: number = 0;
  private colors: string[] = [
    "#ff0000",
    "#ffa500",
    "#ffff00",
    "#ffc0cb",
    "#800080",
    "#0000ff",
    "#8080ff",
    "#008000",
    "#80ff80",
    "#521515",
    "#808080",
    "#000000",
  ];

  selectColor($event: number): void {
    this.activeColor = $event;
  }
}
