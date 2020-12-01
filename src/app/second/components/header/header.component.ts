import {Component, OnInit} from '@angular/core';
import {Advantage} from '../../../service/advantage-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  item: Advantage = {
    icon: 'icon-13',
    title: 'Полное управление процессом',
    text: 'Функционально богатый личный кабинет администратора УЦ и заложенная в его архитектуру\n' +
      '        гибкость, позволит вам выстроить свой уникальный бизнес-процесс и полностью его контролировать.'
  };


  constructor() {
  }

  ngOnInit(): void {
  }

}
