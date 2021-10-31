import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ListItemModel } from './sidebar-item.model';

@Injectable()
export class SidebarService {
  currentSelectedItem: Subject<string> = new Subject();
  colorPallete: string[] = ['yellow', 'purple', 'green', 'blue', 'indigo'];
  shadePallete: string[] = ['400', '500', '600', '700', '800'];
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
      icon: 'collection',
      fillIcon: 'collection-solid',
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

  addUserList(name: string) {
    let newList: ListItemModel = {
      id: this.createUUID(),
      badge: '',
      color: this.getRandomElementOfArray(this.colorPallete),
      shade: this.getRandomElementOfArray(this.shadePallete),
      icon: 'view-list',
      fillIcon: 'view-list-solid',
      text: name,
      subItems: undefined,
    };

    this.userLists.push(newList);
  }

  createUUID() {
    var dt = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }
  getRandomElementOfArray(array: Array<any>) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
  }
}
