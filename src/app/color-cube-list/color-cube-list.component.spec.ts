import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCubeListComponent } from './color-cube-list.component';

describe('ColorCubeListComponent', () => {
  let component: ColorCubeListComponent;
  let fixture: ComponentFixture<ColorCubeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCubeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCubeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
