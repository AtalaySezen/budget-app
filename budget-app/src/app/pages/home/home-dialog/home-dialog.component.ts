import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.scss'],
})
export class HomeDialogComponent {
  amountForm: FormGroup;
  dataId: number;
  dataType: string;
  selectedAmountType: string;
  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<HomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataId = data.id;
    this.dataType = data.type;
    this.selectedAmountType = this.data.dataType;

    if (this.data.title != 'Edit') {
      if (this.data.title == 'New') {
        this.amountForm = new FormGroup({
          amountName: new FormControl('', [Validators.required]),
          amount: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
        });
      } else {
        this.amountForm = new FormGroup({
          amountName: new FormControl(
            this.data.amountName,
            Validators.required
          ),
          amount: new FormControl(this.data.amount, [Validators.required]),
        });
      }
    }
    if (this.data.title == 'Edit') {
      this.amountForm = new FormGroup({
        amount: new FormControl(null, [Validators.required]),
      });
    }
  }

  ngOnInit(): void { }

  saveDialog() {
    let amount = this.amountForm.get('amount')?.value;
    let amountName = this.amountForm.get('amountName')?.value;
    let data = {
      type: amountName,
      amount: Number(amount),
    };
    if (this.data.title == 'New') {
      this.dataService
        .GetAmountDataWithId(this.dataId)
        .subscribe((existingData) => {
          if (this.selectedAmountType == 'incomes') {
            let updatedData = existingData.incomes;
            let wholeData = existingData;
            updatedData.push(data);
            wholeData.incomes = updatedData;

            this.dataService.PutAmountData(this.dataId, wholeData).subscribe(
              (response) => {
                console.log('Ok', response);
                this.dialogRef.close({ event: 'close' });
              },
              (error) => {
                console.error('Hata', error);
              }
            );
          } else if (this.selectedAmountType == 'expenses') {
            let updatedData = existingData.expenses;
            let wholeData = existingData;
            updatedData.push(data);
            wholeData.expenses = updatedData;

            this.dataService.PutAmountData(this.dataId, wholeData).subscribe(
              (response) => {
                console.log('Ok', response);
                this.dialogRef.close({ event: 'close' });
              },
              (error) => {
                console.error('Hata', error);
              }
            );
          } else if (this.selectedAmountType == 'fixedExpenses') {
            let updatedData = existingData.fixedExpenses;
            let wholeData = existingData;
            updatedData.push(data);
            wholeData.fixedExpenses = updatedData;

            this.dataService.PutAmountData(this.dataId, wholeData).subscribe(
              (response) => {
                console.log('Ok', response);
                this.dialogRef.close({ event: 'close' });
              },
              (error) => {
                console.error('Hata', error);
              }
            );
          }
        });
    }
    //Edit
    else {
      if (this.selectedAmountType == 'incomes') {
        this.updateIncomes();
      } else if (this.selectedAmountType == 'expenses') {
        this.updateExpenses();
      } else if (this.selectedAmountType == 'fixedExpenses') {
        this.updateFixedExpenses();
      }
    }
  }

  //#region  Edit Data Functions
  updateIncomes() {
    let amount = this.amountForm.get('amount')?.value;
    let amountName = this.amountForm.get('amountName')?.value;

    let data = {
      type: amountName,
      amount: Number(amount),
    };

    this.dataService
      .GetAmountDataWithId(this.dataId)
      .subscribe((existingData) => {
        let incomes = existingData.incomes;
        const updatedIncomes = incomes.map((income: any) => {
          if (income.type === this.dataType) {
            income.amount = data.amount;
          }
          return income;
        });
        existingData.incomes = updatedIncomes;

        this.dataService.PutAmountData(this.dataId, existingData).subscribe(
          (response) => {
            console.log('Ok', response);
            this.dialogRef.close({ event: 'close' });
          },
          (error) => {
            console.error('Hata', error);
          }
        );
      });
  }

  updateExpenses() {
    let amount = this.amountForm.get('amount')?.value;
    let amountName = this.amountForm.get('amountName')?.value;

    let data = {
      type: amountName,
      amount: Number(amount),
    };

    this.dataService
      .GetAmountDataWithId(this.dataId)
      .subscribe((existingData) => {
        let expenses = existingData.expenses;

        const updateExpenses = expenses.map((expenses: any) => {
          if (expenses.type === this.dataType) {
            expenses.amount = data.amount;
          }
          return expenses;
        });
        existingData.expenses = updateExpenses;

        this.dataService.PutAmountData(this.dataId, existingData).subscribe(
          (response) => {
            console.log('Ok', response);
            this.dialogRef.close({ event: 'close' });
          },
          (error) => {
            console.error('Hata', error);
          }
        );
      });
  }


  updateFixedExpenses() {
    let amount = this.amountForm.get('amount')?.value;
    let amountName = this.amountForm.get('amountName')?.value;

    let data = {
      type: amountName,
      amount: Number(amount),
    };

    this.dataService
      .GetAmountDataWithId(this.dataId)
      .subscribe((existingData) => {
        let fixedExpenses = existingData.fixedExpenses;
        console.log(fixedExpenses);
        const updatedfixedExpenses = fixedExpenses.map((fixedExpenses: any) => {
          if (fixedExpenses.type === this.dataType) {
            fixedExpenses.amount = data.amount;
          }
          return fixedExpenses;
        });
        existingData.fixedExpenses = updatedfixedExpenses;

        this.dataService.PutAmountData(this.dataId, existingData).subscribe(
          (response) => {
            console.log('Ok', response);
            this.dialogRef.close({ event: 'close' });
          },
          (error) => {
            console.error('Hata', error);
          }
        );
      });
  }

  //#endregion

  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }
}
