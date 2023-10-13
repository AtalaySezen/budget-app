import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HomeDialogComponent } from 'src/app/pages/home/home-dialog/home-dialog.component';
import { TableDialogComponent } from './table-dialog/table-dialog.component';
import { CommonModule } from '@angular/common';
import { HomeRepository } from 'src/app/pages/home/home.repository';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, CommonModule],
})
export class TableComponent {
  @Input() dataSource = new MatTableDataSource<any>();
  @Input() id: number;
  @Input() dataType: string;
  displayedColumns = ['type', 'amount', 'actions'];

  constructor(private dialog: MatDialog, private homeRepository: HomeRepository) {
  }

  openDialog(title: string, id: number, type?: string) {
    const dialogRef = this.dialog.open(HomeDialogComponent, {
      width: '800px',
      height: 'auto',
      data: {
        id: id,
        title: title,
        type: type,
        dataType: this.dataType
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.event == 'close') {
        this.homeRepository.getAmountData();
      }
    });
  }

  deleteAmount(id: number, type: string) {
    const dialogRef = this.dialog.open(TableDialogComponent, {
      width: '800px',
      height: 'auto',
      data: {
        id: id,
        type: type,
        dataType: this.dataType,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.event == 'success') {
        console.log('ok');
      }
    });
  }
}
