import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import Chart, { elements } from 'chart.js/auto';

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
  @Input() chartData: any[];
  @Input() chartId: string;
  @Input() amount: any[] = [];
  @ViewChild('canvas') canvas: ElementRef;
  title: string = 'chartDemo';
  pieChart: any = [];
  labels: string[];
  colors: string[];


  ngAfterViewInit() {
    this.calculateAmounts();
    this.calculateLabelsAndColors();

    this.pieChart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'pie',
      data: {
        labels: [
          "Incomes", "Expenses", "Fixed Expenses"
        ],
        datasets: [{
          data: this.amount,
          backgroundColor: ["#4B99E6", "#CCEEE3", "#F777A4"],
          hoverOffset: 1
        }]
      }
    });
  }


  calculateLabelsAndColors() {
    this.chartData.map(element => {
      this.labels = element.labels;
      this.colors = element.colors;
    })
  }

  calculateAmounts() {
    this.chartData.forEach((item: any) => {
      let totalIncomes = 0;
      let totalExpenses = 0;
      let totalFixedExpenses = 0;

      if (item.incomes) {
        item.incomes.forEach((income: any) => {
          totalIncomes += income.amount;
        });
        this.amount.push(totalIncomes);
      }

      if (item.expenses) {
        item.expenses.forEach((expenses: any) => {
          totalExpenses += expenses.amount;
        });
        this.amount.push(totalExpenses);
      }

      if (item.fixedExpenses) {
        item.fixedExpenses.forEach((fixedExpenses: any) => {
          totalFixedExpenses += fixedExpenses.amount;
        });
        this.amount.push(totalFixedExpenses);
      }
    });

  }




}