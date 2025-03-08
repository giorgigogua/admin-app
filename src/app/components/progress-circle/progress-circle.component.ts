import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrl: './progress-circle.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class ProgressCircleComponent {
  @Input() progress?: any
  @Input() color?: string;
  @Input() width?: string
  @Input() height?: string



  get circleStyles() {
    return {
      width: this.width,
      height: this.height,
      borderRadius: '50%',
      position: 'relative',
    };
  }

  get circleProgressStyles() {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (this.progress / 100) * circumference;

    return {
      width: this.width,
      height: this.height,
      borderRadius: '50%',
      background: `conic-gradient(${this.color} ${this.progress}%, #eee 0)`,
      position: 'absolute',
      top: '0',
      left: '0',
    };
  }
}
