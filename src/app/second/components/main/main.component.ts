import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Advantage} from '../second.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  @Input() advantage: Advantage[];

}
