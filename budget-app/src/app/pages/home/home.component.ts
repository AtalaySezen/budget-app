import { Component } from '@angular/core';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  chartsArray: any[] = [
    { chartId: 'chart1', amount: 14000, labels: 'Income', colors: 'green'},
    { chartId: 'chart2', amount: 500, labels: 'Expense', colors: 'red' },
    { chartId: 'chart3', amount: 8600, labels: 'Loan Payments', colors: 'yellow' }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.chartsArray);
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
