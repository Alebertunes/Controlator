import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletCadastrarComponent } from './tablet-cadastrar.component';

describe('TabletCadastrarComponent', () => {
  let component: TabletCadastrarComponent;
  let fixture: ComponentFixture<TabletCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabletCadastrarComponent]
    });
    fixture = TestBed.createComponent(TabletCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
