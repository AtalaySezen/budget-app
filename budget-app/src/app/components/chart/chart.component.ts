import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

export interface ChartData {
  labels: string,
  colors: string,
  amount: number,
  chartId: string
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  title: string = 'chartDemo';
  barChart: any = [];
  labels: string[];
  colors: string[];

  @Input() chartData: any[];
  @Input() chartId: string;
  @Input() amount: number;

  @ViewChild('canvas') canvas: ElementRef;

  constructor() {
  }

  ngAfterViewInit() {
    this.chartData.map(element => {
      this.labels = element.labels;
      this.colors = element.colors;
      this.amount = element.amount;
    })

    this.barChart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'pie',
      data: {
        labels: [
          this.labels
        ],
        datasets: [{
          data: [this.amount],
          backgroundColor: this.colors,
          hoverOffset: 1
        }]
      }
    });

  }



}