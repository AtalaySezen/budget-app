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

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAmountData();
  }

  getAmountData() {
    this.dataService.GetAmountData().subscribe(data => {
      console.log(data);
      this.chartsArray = data;
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
