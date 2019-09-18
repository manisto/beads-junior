import { Component } from '@angular/core';
import { Style } from './shared/style';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private activeColor: number = 0;
  private colors: Style[] = [
    { borderColor: "#000000", borderWidth: ".5mm" },
    { borderColor: "#ff0000" },
    { borderColor: "#ffa500" },
    { borderColor: "#ffff00" },
    { borderColor: "#ffc0cb" },
    { borderColor: "#800080" },
    { borderColor: "#0000ff" },
    { borderColor: "#8080ff" },
    { borderColor: "#008000" },
    { borderColor: "#80ff80" },
    { borderColor: "#521515" },
    { borderColor: "#808080" },
    { borderColor: "#000000" },
  ];

  selectColor($event: number): void {
    this.activeColor = $event;
  }
}
