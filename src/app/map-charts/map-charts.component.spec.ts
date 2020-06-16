import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapChartsComponent } from './map-charts.component';

describe('MapChartsComponent', () => {
  let component: MapChartsComponent;
  let fixture: ComponentFixture<MapChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
