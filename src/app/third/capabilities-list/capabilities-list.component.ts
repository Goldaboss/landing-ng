import {Component, Input, OnInit} from '@angular/core';
import {Capabilities} from '../third.component';

@Component({
  selector: 'app-capabilities-list',
  templateUrl: './capabilities-list.component.html',
  styleUrls: ['./capabilities-list.component.scss']
})
export class CapabilitiesListComponent implements OnInit {

  @Input() capabilities: Capabilities[];

  constructor() { }

  ngOnInit(): void {
  }

}
