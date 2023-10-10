import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  chartsArray: any[] = [
    { chartId: 'chart1', amount: 14000, labels: 'Incomes', colors: 'green' },
    { chartId: 'chart2', amount: 500, labels: 'Expense', colors: 'red' },
    { chartId: 'chart3', amount: 8600, labels: 'Loan Payments', colors: 'yellow' }
  ];
  constructor() { }
  ngOnInit() {
    console.log(this.chartsArray);
  }
}
