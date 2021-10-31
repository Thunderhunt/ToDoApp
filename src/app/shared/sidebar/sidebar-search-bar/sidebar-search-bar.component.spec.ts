import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSearchBarComponent } from './sidebar-search-bar.component';

describe('SidebarSearchBarComponent', () => {
  let component: SidebarSearchBarComponent;
  let fixture: ComponentFixture<SidebarSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
