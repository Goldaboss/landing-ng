import {Component, OnInit} from '@angular/core';
import {Advantage, AdvantageDataService} from '../../../service/advantage-service.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  advantages: Advantage[] = [];


  constructor(
    private serviceAdvantage: AdvantageDataService) {
  }

  ngOnInit(): void {
    this.serviceAdvantage.advantageData()
      .subscribe(advantage => this.advantages = advantage);
    console.log(this.advantages);
  }

}
