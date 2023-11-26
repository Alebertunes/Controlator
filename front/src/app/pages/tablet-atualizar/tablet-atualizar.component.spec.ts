import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletAtualizarComponent } from './tablet-atualizar.component';

describe('TabletAtualizarComponent', () => {
  let component: TabletAtualizarComponent;
  let fixture: ComponentFixture<TabletAtualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabletAtualizarComponent]
    });
    fixture = TestBed.createComponent(TabletAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
