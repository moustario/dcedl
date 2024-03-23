import { Component } from '@angular/core';
import { ColorViewerComponent } from '../color-viewer/color-viewer.component';
import { ColorSelectComponent } from '../color-select/color-select.component';

@Component({
  selector: 'app-color-picking',
  standalone: true,
  imports: [ColorViewerComponent, ColorSelectComponent],
  templateUrl: './color-picking.component.html',
  styleUrl: './color-picking.component.scss'
})
export class ColorPickingComponent {
  color = '';
  selections: string[] = [];

  constructor() {
    this.newGame();
  }

  newGame() {
    this.color = this.randomColor();
    this.selections = [this.color, this.randomColor(), this.randomColor()];
  }

  randomColor() {
    let randomNumber = 1000001;
    do {
      randomNumber = Math.floor(Math.random() * 16777215);
    } while (randomNumber < 1000000); // a number to short wont give a valid color
    const color = '#' + randomNumber.toString(16);
    return color;
  }

  onSelect(color: string) {
    if (color === this.color) {
      alert('Correct!');
      this.newGame();
    } else {
      alert('Try again!');
    }
  }

}
