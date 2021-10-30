import { Component, Input, OnInit } from '@angular/core';
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
  constructor(sidebarService: SidebarService) {
    this.mainMenu = sidebarService.getMainMenuContent();
  }

  ngOnInit(): void {}
}
