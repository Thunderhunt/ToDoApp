import {
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { transitionAnimation } from 'src/app/core/animations/swipe-right-insert-remove.animation';
import { ListItemModel } from './sidebar-item.model';
import { SidebarService } from './sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() collapsed: boolean = false;

  mainMenu: ListItemModel[];
  userLists: ListItemModel[];
  userGroups: ListItemModel[];
  selectedItem: string = '';
  constructor(public sidebarService: SidebarService) {
    this.mainMenu = sidebarService.getMainMenuItems();
    this.userLists = sidebarService.getUserListsItems();
    this.userGroups = sidebarService.getUserGroupsItems();
  }

  ngOnInit(): void {}
}
