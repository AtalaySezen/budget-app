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
  title: string = 'chartDemo';
  pieChart: any = [];
  labels: string[];
  colors: string[];

  @Input() chartData: any[];
  @Input() chartId: string;
  @Input() amount: any[] = [];

  @ViewChild('canvas') canvas: ElementRef;

  constructor() {
  }

  ngAfterViewInit() {
    this.calculateAmounts();
    this.calculateLabelsAndColors();

    this.pieChart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'pie',
      data: {
        labels: [
          this.labels
        ],
        datasets: [{
          data: this.amount,
          backgroundColor: this.colors,
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
          for (const key in income) {
            totalIncomes += income[key];
          }
        });
        this.amount.push(totalIncomes);
      }

      if (item.expenses) {
        item.expenses.forEach((expense: any) => {
          for (const key in expense) {
            totalExpenses += expense[key];
          }
        });
        this.amount.push(totalExpenses);
      }

      if (item.fixedExpenses) {
        item.fixedExpenses.forEach((fixedExpense: any) => {
          for (const key in fixedExpense) {
            totalFixedExpenses += fixedExpense[key];
          }
        });
        this.amount.push(totalFixedExpenses);
      }
    });

  }




}