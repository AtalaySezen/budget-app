import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.scss']
})
export class HomeDialogComponent {
  amountForm: FormGroup;
  dataId: number;

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<HomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dataId = data.id;
    console.log(this.data.title);
    if (this.data.title == 'New Incomes') {
      this.amountForm = new FormGroup({
        amountName: new FormControl('', [Validators.required]),
        amount: new FormControl(0, [Validators.required]),
      })
    } else {
      this.amountForm = new FormGroup({
        amountName: new FormControl(this.data.amountName, Validators.required),
        amount: new FormControl(this.data.amount, [Validators.required]),
      })
    }
  }

  ngOnInit(): void {
  }

  saveDialog() {
    let amount = this.amountForm.get('amount')?.value;
    let amountName = this.amountForm.get('amountName')?.value;
    let data = {
      type: amountName,
      amount: Number(amount)
    }

    this.dataService.GetAmountDataWithId(this.dataId).subscribe(existingData => {
      let updatedData = existingData.incomes;
      let wholeData = existingData;
      updatedData.push(data);
      wholeData.incomes = updatedData;

      this.dataService.PutAmountData(this.dataId, wholeData).subscribe(response => {
        console.log('Ok', response);
        this.dialogRef.close({ event: 'close' });
      }, error => {
        console.error('Hata', error);
      });

    });


  }


  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }



}
