import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HomeDialogComponent } from 'src/app/pages/home/home-dialog/home-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule]
})
export class TableComponent {
  @Input() dataSource = new MatTableDataSource<any>();
  @Input() id: number;


  displayedColumns = ['type', 'amount', 'actions'];

  constructor(private dialog: MatDialog) { }

  openDialog(title: string, id: number) {
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

  deleteAmount(id: number) {
    console.log(id);

  }


}





