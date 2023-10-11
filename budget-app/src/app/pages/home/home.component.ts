import { Component } from '@angular/core';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  chartsArray: any[] = [];
  currentDate = new Date();
  numberExpenses: any = 0;
  currentBudget: number;
  totalIncome: number;

  constructor(private dataService: DataService, private dialog: MatDialog) {
    this.getAmountData();
  }

  getAmountData() {
    this.dataService.GetAmountData().subscribe(data => {
      this.chartsArray = data;
      this.numberExpenses = data[0].expenses.length;
      this.calculateCurrenntBudget(data);
    })
  }

  calculateCurrenntBudget(data: any[]) {
    this.totalIncome = data[0].incomes.reduce((total: any, income: any) => total + income.amount, 0);
    const totalExpense = data[0].expenses.reduce((total: any, expense: any) => total + expense.amount, 0);
    const totalFixedExpense = data[0].fixedExpenses.reduce((total: any, fixedExpense: any) => total + fixedExpense.amount, 0);
    this.currentBudget = this.totalIncome - (totalExpense + totalFixedExpense);
  }


  async openDialog(title: string, id: number) {
    const dialogRef = this.dialog.open(HomeDialogComponent, {
      width: '800px',
      height: 'auto',
      data: {
        id: id,
        title: title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event == 'close') {
        this.getAmountData();
      }
    });
  }





}
