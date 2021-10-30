import { Component, Input, OnInit } from '@angular/core';
import { ListItemModel } from './sidebar-item/sidebar-item.model';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() collapsed: boolean = false;
  content: ListItemModel[] = [
    {
      color: 'yellow',
      shade: '500',
      icon: 'sun',
      fillIcon: 'sun-solid',
      text: 'My Day',
      badge: '11',
      expandable: false,
    },
    {
      color: 'purple',
      shade: '500',
      icon: 'star',
      fillIcon: 'star-solid',
      text: 'Important',
      badge: '11',
      expandable: false,
    },
    {
      color: 'green',
      shade: '500',
      icon: 'calendar',
      fillIcon: 'calendar-solid',
      text: 'Planned',
      badge: '11',
      expandable: false,
    },
    {
      color: 'blue',
      shade: '500',
      icon: 'user',
      fillIcon: 'user-solid',
      text: 'Assigned to you',
      badge: '11',
      expandable: false,
    },
    {
      color: 'indigo',
      shade: '500',
      icon: 'home',
      fillIcon: 'home-solid',
      text: 'Tasks',
      badge: '11',
      expandable: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
