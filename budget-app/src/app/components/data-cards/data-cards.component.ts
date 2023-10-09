import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.scss']
})
export class DataCardsComponent {
  @Input() icon: string = '';
  @Input() infoHeader: string = '';
  @Input() infoText: string = '';
  @Input() color: string = '';






  
}
