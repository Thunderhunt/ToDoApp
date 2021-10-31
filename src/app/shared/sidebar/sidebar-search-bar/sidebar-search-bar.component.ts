import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-search-bar',
  templateUrl: './sidebar-search-bar.component.html',
  styleUrls: ['./sidebar-search-bar.component.scss'],
})
export class SidebarSearchBarComponent implements OnInit {
  options: boolean = false;
  @Input() optionsContent: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  changeOptions() {
    this.options = !this.options;
  }
}
