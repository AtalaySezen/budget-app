import { Component } from '@angular/core';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HomeRepository } from './home.repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentDate = new Date();

  constructor(
    private dialog: MatDialog,
    public homeRepository: HomeRepository
  ) {
    this.homeRepository.getAmountData();
  }

  async openDialog(title: string, id: number) {
    const dialogRef = this.dialog.open(HomeDialogComponent, {
      width: '800px',
      height: 'auto',
      data: {
        id: id,
        title: title,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.event == 'close') {
        this.homeRepository.getAmountData();
      }
    });
  }
}
