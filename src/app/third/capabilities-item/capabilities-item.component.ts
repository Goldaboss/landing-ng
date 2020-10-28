import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Capabilities} from '../third.component';

@Component({
  selector: 'app-capabilities-item',
  templateUrl: './capabilities-item.component.html',
  styleUrls: ['./capabilities-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CapabilitiesItemComponent {
  @Input() item: Capabilities;

  public get itemClass(): string {
    if (this.item.iconSM) {
      return this.item.icon + ' icon-sm';
    }
    return this.item.icon;
  }
}


