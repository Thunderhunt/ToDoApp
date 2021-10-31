import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar-search-bar',
  templateUrl: './sidebar-search-bar.component.html',
  styleUrls: ['./sidebar-search-bar.component.scss'],
})
export class SidebarSearchBarComponent implements OnInit {
  options: boolean = false;
  inputText: string = '';
  @Input() optionsContent: string[] = [];
  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {}

  changeOptions() {
    this.options = !this.options;
  }
  addNewList() {
    this.sidebarService.addUserList(this.inputText);
    this.inputText = '';
  }
}
