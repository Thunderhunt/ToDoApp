import { Injectable } from '@angular/core';
import { ListItemModel } from './sidebar-item.model';

@Injectable()
export class SidebarService {
  mainMenu: ListItemModel[] = [
    {
      color: 'yellow',
      shade: '500',
      icon: 'sun',
      fillIcon: 'sun-solid',
      text: 'My Day',
      badge: '11',
      subItems: undefined,
    },
    {
      color: 'purple',
      shade: '500',
      icon: 'star',
      fillIcon: 'star-solid',
      text: 'Important',
      badge: '11',
      subItems: undefined,
    },
    {
      color: 'green',
      shade: '500',
      icon: 'calendar',
      fillIcon: 'calendar-solid',
      text: 'Planned',
      badge: '11',
      subItems: undefined,
    },
    {
      color: 'blue',
      shade: '500',
      icon: 'user',
      fillIcon: 'user-solid',
      text: 'Assigned to you',
      badge: '11',
      subItems: undefined,
    },
    {
      color: 'indigo',
      shade: '500',
      icon: 'home',
      fillIcon: 'home-solid',
      text: 'Tasks',
      badge: '11',
      subItems: undefined,
    },
  ];

  constructor() {}

  getMainMenuContent(): ListItemModel[] {
    return this.mainMenu;
  }
}
