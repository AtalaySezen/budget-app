import { Component } from '@angular/core';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/services/data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  chartsArray: any[] = [];
  currentDate = new Date();
  numberExpenses: number = 0;


  constructor(private dataService: DataService, private dialog: MatDialog) {
    this.getAmountData();
  }

  getAmountData() {
    this.dataService.GetAmountData().subscribe(data => {
      this.chartsArray = data;
      this.numberExpenses = data[1].expenses.length;
    })
  }


  async openDialog(title: string, id: number) {
    console.log(title);
    const dialogRef = this.dialog.open(HomeDialogComponent, {
      width: '800px',
      height: 'auto',
      data: {
        id: id,
        title: title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event == 'success') {
        console.log("ok");
      }
    });
  }





}
