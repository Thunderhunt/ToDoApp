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
    id: 'uiui132uiui13ui13iu',
    color: 'green',
    shade: '500',
    icon: 'star',
    fillIcon: 'star-solid',
    text: 'Group 1',
    badge: '11',
    subItems: [
      {
        id: 'uiui132uiui1345433iu',
        color: 'yellow',
        shade: '500',
        icon: 'star',
        fillIcon: 'star-solid',
        text: 'List 1',
        badge: '11',
        subItems: undefined,
      },
      {
        id: 'uiui132uiu234ui13iu',
        color: 'yellow',
        shade: '500',
        icon: 'star',
        fillIcon: 'star-solid',
        text: 'List 1',
        badge: '11',
        subItems: undefined,
      },
      {
        id: 'uiui132uiui13ui23131u',
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

  isCollapsed: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  collapseChange() {
    this.isCollapsed = !this.isCollapsed;
  }
}
