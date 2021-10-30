import { Component, Input, OnInit } from '@angular/core';
import { HeroIconName } from 'ng-heroicons';
import { ListItemModel } from '../sidebar-item/sidebar-item.model';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent implements OnInit {
  @Input() listItem: ListItemModel = {
    color: '',
    shade: '',
    icon: 'star',
    fillIcon: 'star-solid',
    text: 'text',
    badge: '11',
    expandable: false,
  };
  icon: HeroIconName = 'star';
  currentIconFill = false;
  hoverColor: string = '';
  iconColor: string = '';
  constructor() {
    this.iconColor = 'text-' + this.listItem.color + '-' + this.listItem.shade;
  }
  toggleIconState() {
    if (this.currentIconFill) this.icon = this.listItem.icon;
    else this.icon = this.listItem.fillIcon;
    this.currentIconFill = !this.currentIconFill;
  }
  ngOnInit(): void {
    this.iconColor = 'text-' + this.listItem.color + '-' + this.listItem.shade;
    this.icon = this.listItem.icon;
  }
}
