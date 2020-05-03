import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondownAreaComponent } from './condown-area.component';

describe('CondownAreaComponent', () => {
  let component: CondownAreaComponent;
  let fixture: ComponentFixture<CondownAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondownAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondownAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
