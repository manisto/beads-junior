import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Style } from '../shared/style';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  @Input() colors: Style[] = [];
  @Input() activeColor: number;

  @Output() colorSelected = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() { }

  setActiveColor(index: number): void {
    this.activeColor = index;
    this.colorSelected.emit(this.activeColor);
  }
}
