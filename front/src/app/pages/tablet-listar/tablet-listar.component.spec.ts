import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletListarComponent } from './tablet-listar.component';

describe('TabletListarComponent', () => {
  let component: TabletListarComponent;
  let fixture: ComponentFixture<TabletListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabletListarComponent]
    });
    fixture = TestBed.createComponent(TabletListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
