import { Injectable } from '@angular/core';

export interface Advantage {
  icon: string;
  title: string;
  text: string;
  titleSm?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdvantageDataService {
 // https://run.mocky.io/v3/bb506157-a37c-4e12-b951-8fd5074604b8
  private data: Advantage[] = [
    {icon: 'icon-1', title: 'Управление документами', text: 'Вы выстраиваете свой документарный процесс. Формируете любые документы автоматически. Запрашивайте только те документы, которые соответствуют вашему процессу.'},
    {icon: 'icon-2', title: 'Биллинг', text: 'Счета вашим клиентам выставляются автоматически. Проводите их, загружая платёжки в Кабинет.'},
    {icon: 'icon-3', title: 'Партнёрская сеть', text: 'Вы можете быстро построить партнёрскую сеть, взаимодействуя с партнёрами через Личный кабинет. Используемые в системе механизмы защиты — гарантируют вам юридическую значимость доверенных партнёру процедур.'},
    {icon: 'icon-4', title: 'Конструктор сертификата', text: 'Собирайте в два клика сертификаты для любых информационных систем. Электронные торговые площадки, госорганы и порталы — выбирайте только то, что вам нужно.'},
    {icon: 'icon-5', title: 'Рассылки писем', text: 'Вы можете создавать любые шаблоны писем в своём корпоративном стиле. Эти письма будут отправляться вашим клиентам/партнёрам по выбранным вами триггерным событиям.'},
    {icon: 'icon-6', title: 'Реестр документов', text: 'Вы будете знать где находится конкретный документ  в любой момент времени. Вы сможете контролировать процесс получения документов от ваших партнёров.'},
    {icon: 'icon-7', title: 'Реестр сертификатов', text: 'В соответствии с 63-ФЗ и 111 приказом Минкомсвязи аккредитованные УЦ обязаны вести реестр всех выпущенных сертификатов и предоставлять его.'},
    {icon: 'icon-8', title: 'Собственный он-лайн чат', text: 'Он-лайн чат с сохранением истории переписки позволит вам быть ближе к своим партнёрам и клиентам.'},
    {icon: 'icon-9', title: 'Аналитика', text: 'Просматривайте отчёты по счетам, выпущенным и оканчивающимся сертификатам.'},
    {icon: 'icon-10', title: 'Автоматический выпуск сертификатов', text: 'Сертификаты могут выпускаться автоматически.'},
    {icon: 'icon-11', title: 'Интеграция со СМЭВ', text: 'Интегрированы с системой межведомственного электронного взаимодействия для комфортного выполнения требований 63-ФЗ', titleSm: '(сервисы ФНС, ПФР, МВД, ЕСИА)'},
    {icon: 'icon-12', title: 'Интеграция с ФНС', text: 'Автоматическое заполнение карточки компании данными из ФНС'},
  ];

  public get advantageData(): Advantage[] {
    return this.data;
  }
}
