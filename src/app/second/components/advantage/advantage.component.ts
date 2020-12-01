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
}
