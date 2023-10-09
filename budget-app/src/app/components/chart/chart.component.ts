import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  title: string = 'chartDemo';

  ngOnInit() {
    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: [
          'Expenses',
          'Incomes',
          'Loan Payment'
        ],
        datasets: [{
          // label: 'My First Dataset',
          data: [5400, 14000, 8600],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 1
        }]
      }
    });
  }



}