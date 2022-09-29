import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGroupingComponent } from './chart-grouping.component';

describe('ChartGroupingComponent', () => {
  let component: ChartGroupingComponent;
  let fixture: ComponentFixture<ChartGroupingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartGroupingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
