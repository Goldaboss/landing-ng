import { Component, OnInit } from '@angular/core';

export interface Capabilities {
  icon: string;
  text: string;
  iconSM?: boolean;
}

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  constructor() { }

  capabilities: Capabilities[] = [
    {icon: 'icon-Union-1', text: 'Минимизировать временные издержки при выпуске сертификатов'},
    {icon: 'icon-Union-2', text: 'Обойтись минимальными человеческими ресурсами и при этом зарабатывать больше'},
    {icon: 'icon-Union-3', text: 'Выстроить партнёрскую сеть по всей РФ'},
    {icon: 'icon-Union-4', text: 'Автоматизировать все рутинные операции'},
    {icon: 'icon-Union-5', text: 'Избежать ошибок, связанных с человеческим фактором, благодаря продуманной автоматизации'},
    {icon: 'icon-Union-6', text: 'Выпускать «облачные» сертификаты электронной подписи', iconSM: true},
];

  ngOnInit(): void {
  }

}
