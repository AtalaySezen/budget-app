import { Component, Input } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [MatTableModule]
})
export class TableComponent {
  @Input() dataSource = new MatTableDataSource<any>();
  displayedColumns = ['type', 'amount'];

}
