import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPositionComponent } from './draw-position.component';

describe('DrawPositionComponent', () => {
  let component: DrawPositionComponent;
  let fixture: ComponentFixture<DrawPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
