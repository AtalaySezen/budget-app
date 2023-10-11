import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class TableDialogComponent {
  dataType: string;
  type: string;
  id: number;

  constructor(public dialog: MatDialog, private dataService: DataService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dataType = data.dataType;
    this.type = data.type;
    this.id = data.id;
  }

  deleteDialog() {
    this.dataService.GetAmountDataWithId(this.id).subscribe(existingData => {
      let updatedData = existingData;
      let dataItems: any[] = [];

      switch (this.dataType) {
        case 'incomes':
          dataItems = updatedData.incomes;
          break;
        case 'expenses':
          dataItems = updatedData.expenses;
          break;
        case 'fixedExpenses':
          dataItems = updatedData.fixedExpenses;
          break;
        default:
          console.error('Geçersiz veri türü');
          return;
      }

      const indexToRemove = dataItems.findIndex((item: any) => item.type === this.type);

      if (indexToRemove !== -1) {
        dataItems.splice(indexToRemove, 1);
      }

      this.dataService.PutAmountData(this.id, updatedData).subscribe(response => {
        console.log('Ok', response);
      }, error => {
        console.error('Hata', error);
      });
    });
  }







}


