import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit {
  toggleScheme = false;
  constructor() { }

  ngOnInit(): void {
  }

  client(event?): any {
    this.toggleScheme = true;
  }

  partner(event?): any {
    this.toggleScheme = false;
  }
}
