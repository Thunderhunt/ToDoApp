import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCollapsableItemComponent } from './sidebar-collapsable-item.component';

describe('SidebarCollapsableItemComponent', () => {
  let component: SidebarCollapsableItemComponent;
  let fixture: ComponentFixture<SidebarCollapsableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCollapsableItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCollapsableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
