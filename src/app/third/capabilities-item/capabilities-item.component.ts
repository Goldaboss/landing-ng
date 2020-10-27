import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-capabilities-item',
  templateUrl: './capabilities-item.component.html',
  styleUrls: ['./capabilities-item.component.scss']
})
export class CapabilitiesItemComponent implements OnInit {
  @Input() item: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}


