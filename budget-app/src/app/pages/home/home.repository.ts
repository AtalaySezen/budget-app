import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Injectable({
  providedIn: 'root',
})
export class HomeRepository {
  chartsArray: any[] = [];
  numberExpenses: any = 0;
  currentBudget: number;
  totalIncome: number;
  loader: boolean = false;

  constructor(private dataService: DataService) {}

  getAmountData() {
    this.loader = true;
    this.dataService.GetAmountData().subscribe((data) => {
      this.chartsArray = data;
      this.numberExpenses = data[0].expenses.length;
      this.calculateCurrenntBudget(data);
      this.loader = false;
    });
  }

  calculateCurrenntBudget(data: any[]) {
    this.totalIncome = data[0].incomes.reduce(
      (total: any, income: any) => total + income.amount,
      0
    );
    const totalExpense = data[0].expenses.reduce(
      (total: any, expense: any) => total + expense.amount,
      0
    );
    const totalFixedExpense = data[0].fixedExpenses.reduce(
      (total: any, fixedExpense: any) => total + fixedExpense.amount,
      0
    );
    this.currentBudget = this.totalIncome - (totalExpense + totalFixedExpense);
  }

  
}
