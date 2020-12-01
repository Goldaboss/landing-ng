import {Component, Input} from '@angular/core';
import {Advantage} from '../../../service/advantage-service.service';

@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent {

  constructor() {
  }

  @Input() item: Advantage;

  public get addTitleSm(): string {
    if (this.item.titleSm) {
      return this.item.title + 'item.titleSm';
    } else {
      return this.item.title + '!';
    }
  }
}