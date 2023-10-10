import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.scss']
})
export class HomeDialogComponent {
  amountForm: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<HomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(this.data.title)
    if (this.data.title == 'New Incomes') {
      this.amountForm = new FormGroup({
        amountName: new FormControl('', [Validators.required]),
        amount: new FormControl('', [Validators.required]),
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
      amount: amount,
      amountName: amountName
    }
    console.log(data);

  }


  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }



}
