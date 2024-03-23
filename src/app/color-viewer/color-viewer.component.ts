import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-viewer.component.html',
  styleUrl: './color-viewer.component.scss'
})
export class ColorViewerComponent {
  @Input() color = '';

}
