import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  imports: [CommonModule]

})
export class TableComponent {


  tableList = [
    {
      img: 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-1.png',
      title: 'Filter AI',
      updated: 'mar 15',
      status: 'Ready to ship',
      authorImg: 'https://i.pinimg.com/736x/9c/6a/60/9c6a60071d2aa2b61c783cd553868ece.jpg',
      author: 'Michael Johnson',
      team: ['https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-2.png', 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-3.png']


    },
    {
      img: 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-2.png',
      title: 'Design Landing Page',
      updated: 'mar 15',
      status: 'Cancelled',
      authorImg: 'https://i.pinimg.com/736x/9c/6a/60/9c6a60071d2aa2b61c783cd553868ece.jpg',
      author: 'Michael Johnson',
      team: ['https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-2.png', 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-3.png']


    },
    {
      img: 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-3.png',
      title: 'Update Documentation',
      updated: 'mar 15',
      status: 'Pending',
      authorImg: 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-3.png',
      author: 'Michael Johnson',
      team: ['https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-2.png', 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-3.png']


    },
    {
      img: 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-2.png',
      title: 'Update touche',
      updated: 'mar 15',
      status: 'Backing',
      authorImg: 'https://i.pinimg.com/736x/9c/6a/60/9c6a60071d2aa2b61c783cd553868ece.jpg',
      author: 'Michael Johnson',
      team: ['https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-2.png', 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-3.png', 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-3.png']


    },
    {
      img: 'https://i.pinimg.com/736x/9c/6a/60/9c6a60071d2aa2b61c783cd553868ece.jpg',
      title: 'Update touche',
      updated: 'mar 15',
      status: 'Backing',
      authorImg: 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-3.png',
      author: 'Michael Johnson',
      team: ['https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-2.png', 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-3.png']

    }
  ]
  @Input({ transform: booleanAttribute }) checkboxes: boolean = false




}
