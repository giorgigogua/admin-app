import { Component, OnInit } from '@angular/core';
import { PostListCardComponent } from '../../../components/post-list-card/post-list-card.component';
import { PieChartComponent } from '../../../components/charts/pie-chart/pie-chart.component';
import { RecentActivityComponent } from '../../../components/recent-activity/recent-activity.component';
import { LineChartComponent } from '../../../components/charts/line-chart/line-chart.component';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.scss',
})
export class CryptoComponent implements OnInit {

  ngOnInit(): void {
    
  }
  title:string='crypto'
}
