import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletDeletarComponent } from './tablet-deletar.component';

describe('TabletDeletarComponent', () => {
  let component: TabletDeletarComponent;
  let fixture: ComponentFixture<TabletDeletarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabletDeletarComponent]
    });
    fixture = TestBed.createComponent(TabletDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
