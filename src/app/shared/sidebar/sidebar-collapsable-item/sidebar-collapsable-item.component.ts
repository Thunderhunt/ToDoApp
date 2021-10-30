import { Component, Input, OnInit } from '@angular/core';
import { ListItemModel } from '../sidebar-item.model';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar-collapsable-item',
  templateUrl: './sidebar-collapsable-item.component.html',
  styleUrls: ['./sidebar-collapsable-item.component.scss'],
})
export class SidebarCollapsableItemComponent implements OnInit {
  @Input() userGroup: ListItemModel = {
    color: 'green',
    shade: '500',
    icon: 'star',
    fillIcon: 'star-solid',
    text: 'Group 1',
    badge: '11',
    subItems: [
      {
        color: 'yellow',
        shade: '500',
        icon: 'star',
        fillIcon: 'star-solid',
        text: 'List 1',
        badge: '11',
        subItems: undefined,
      },
      {
        color: 'yellow',
        shade: '500',
        icon: 'star',
        fillIcon: 'star-solid',
        text: 'List 1',
        badge: '11',
        subItems: undefined,
      },
      {
        color: 'yellow',
        shade: '500',
        icon: 'star',
        fillIcon: 'star-solid',
        text: 'List 1',
        badge: '11',
        subItems: undefined,
      },
    ],
  };
  collapsed: string = 'block';
  isCollapsed: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  collapseChange() {
    if (this.isCollapsed) {
      this.collapsed = 'hidden';
    } else {
      this.collapsed = 'block';
    }
    this.isCollapsed = !this.isCollapsed;
  }
}
