import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ListItemModel } from './sidebar-item.model';

@Injectable()
export class SidebarService {
  currentSelectedItem: Subject<string> = new Subject();
  mainMenu: ListItemModel[] = [
    {
      id: 'uiui132uiui13ui0900',
      color: 'yellow',
      shade: '500',
      icon: 'sun',
      fillIcon: 'sun-solid',
      text: 'My Day',
      badge: '11',
      subItems: undefined,
    },
    {
      id: 'uiui132uiui1360065',
      color: 'purple',
      shade: '500',
      icon: 'star',
      fillIcon: 'star-solid',
      text: 'Important',
      badge: '11',
      subItems: undefined,
    },
    {
      id: 'uiui132u0650ui13iu',
      color: 'green',
      shade: '500',
      icon: 'calendar',
      fillIcon: 'calendar-solid',
      text: 'Planned',
      badge: '11',
      subItems: undefined,
    },
    {
      id: 'u456465uiui13ui13iu',
      color: 'blue',
      shade: '500',
      icon: 'user',
      fillIcon: 'user-solid',
      text: 'Assigned to you',
      badge: '11',
      subItems: undefined,
    },
    {
      id: 'ui5662uiui13ui13iu',
      color: 'indigo',
      shade: '500',
      icon: 'home',
      fillIcon: 'home-solid',
      text: 'Tasks',
      badge: '11',
      subItems: undefined,
    },
    {
      id: 'ui565656iui13ui13iu',
      color: 'yellow',
      shade: '500',
      icon: 'sun',
      fillIcon: 'sun-solid',
      text: 'My Day',
      badge: '11',
      subItems: undefined,
    },
    {
      id: '8989ui132uiui13ui13iu',
      color: 'purple',
      shade: '500',
      icon: 'star',
      fillIcon: 'star-solid',
      text: 'Important',
      badge: '11',
      subItems: undefined,
    },
    {
      id: 'uiui132uiui13uiaasads',
      color: 'green',
      shade: '500',
      icon: 'calendar',
      fillIcon: 'calendar-solid',
      text: 'Planned',
      badge: '11',
      subItems: undefined,
    },
    {
      id: 'uiui132131232sad13ui13iu',
      color: 'blue',
      shade: '500',
      icon: 'user',
      fillIcon: 'user-solid',
      text: 'Assigned to you',
      badge: '11',
      subItems: undefined,
    },
    {
      id: 'uiui132uiui1343535u',
      color: 'indigo',
      shade: '500',
      icon: 'home',
      fillIcon: 'home-solid',
      text: 'Tasks',
      badge: '11',
      subItems: undefined,
    },
    {
      id: 'uiui132uiui135677asda',
      color: 'yellow',
      shade: '500',
      icon: 'sun',
      fillIcon: 'sun-solid',
      text: 'My Day',
      badge: '11',
      subItems: undefined,
    },
    {
      id: 'uiui1322342d13ui13iu',
      color: 'purple',
      shade: '500',
      icon: 'star',
      fillIcon: 'star-solid',
      text: 'Important',
      badge: '11',
      subItems: undefined,
    },
    {
      id: 'uiui23423iui13ui13iu',
      color: 'green',
      shade: '500',
      icon: 'calendar',
      fillIcon: 'calendar-solid',
      text: 'Planned',
      badge: '11',
      subItems: undefined,
    },
    {
      id: 'uiui1324sdfiui13ui13iu',
      color: 'blue',
      shade: '500',
      icon: 'user',
      fillIcon: 'user-solid',
      text: 'Assigned to you',
      badge: '11',
      subItems: undefined,
    },
    {
      id: 'uiui132656iui13ui13iu',
      color: 'indigo',
      shade: '500',
      icon: 'home',
      fillIcon: 'home-solid',
      text: 'Tasks',
      badge: '11',
      subItems: undefined,
    },
  ];

  userLists: ListItemModel[] = [
    {
      id: 'ui465s324sdfiui13ui13iu',
      color: 'yellow',
      shade: '500',
      icon: 'view-list',
      fillIcon: 'view-list-solid',
      text: 'List 1',
      badge: '11',
      subItems: undefined,
    },
    {
      id: 'ui3224sdfiui13ui13iu',
      color: 'purple',
      shade: '500',
      icon: 'view-list',
      fillIcon: 'view-list-solid',
      text: 'List 2',
      badge: '11',
      subItems: undefined,
    },
  ];

  userGroups: ListItemModel[] = [
    {
      id: 'uiui1324sd4543ui13iu',
      color: 'yellow',
      shade: '500',
      icon: 'view-list',
      fillIcon: 'view-list-solid',
      text: 'List 1',
      badge: '11',
      subItems: [
        {
          id: 'uiui1asdsaui13ui13iu',
          color: 'yellow',
          shade: '500',
          icon: 'view-list',
          fillIcon: 'view-list-solid',
          text: 'List 1',
          badge: '11',
          subItems: undefined,
        },
        {
          id: 'uiui133534ui13ui13iu',
          color: 'yellow',
          shade: '500',
          icon: 'view-list',
          fillIcon: 'view-list-solid',
          text: 'List 1',
          badge: '11',
          subItems: undefined,
        },
      ],
    },
  ];

  constructor() {}

  getMainMenuItems(): ListItemModel[] {
    return this.mainMenu;
  }

  getUserListsItems(): ListItemModel[] {
    return this.userLists;
  }
  getUserGroupsItems(): ListItemModel[] {
    return this.userGroups;
  }
  changeSelectedIndex(id: string) {
    this.currentSelectedItem.next(id);
  }
}
