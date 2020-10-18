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

  client() {
    this.toggleScheme = true;
  }

  partner() {
    this.toggleScheme = false;
  }
}
