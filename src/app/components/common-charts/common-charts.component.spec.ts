import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonChartsComponent } from './common-charts.component';

describe('CommonChartsComponent', () => {
  let component: CommonChartsComponent;
  let fixture: ComponentFixture<CommonChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
