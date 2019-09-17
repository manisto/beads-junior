import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../shared/board';
import { Row } from "../shared/row";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private board: Board;

  @Input() activeColor: number;
  @Input() colors: string[];

  constructor() { }

  ngOnInit() {
    this.board = {
      rows: []
    };

    for (let i = 0; i < 29; i++) {
      let pegs: number[] = [];

      for (let j = 0; j < 29; j++) {
        pegs.push(null);
      }

      this.board.rows.push({ pegs });
    }
  }

  preventEvent($event: Event): void {
    $event.preventDefault();
  }

  pegEntered($event: MouseEvent, row, pegIndex): void {
    if ($event.buttons !== 1) {
      return;
    }
    
    row.pegs[pegIndex] = this.activeColor;
  }

}
