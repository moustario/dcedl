import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-select',
  standalone: true,
  imports: [],
  templateUrl: './color-select.component.html',
  styleUrl: './color-select.component.scss'
})
export class ColorSelectComponent {
  @Input() selections: string[] = [];
  @Output() select = new EventEmitter<string>();

  constructor() {
    // shuffle the selections
    this.selections.sort(() => Math.random() - 0.5);
  }

  onSelect(color: string) {
    this.select.emit(color);
  }

}
