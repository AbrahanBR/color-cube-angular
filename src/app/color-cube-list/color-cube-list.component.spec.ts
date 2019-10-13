import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {of, throwError} from 'rxjs';

import { ColorCubeListComponent } from './color-cube-list.component';
import {ColorCubeService} from '../color-cube/color-cube.service';
import {COLORS} from '../color-cube/_mock_/color-cube.mock';
import {HeaderComponent} from '../header/header.component';
import {SearchComponent} from '../search/search.component';
import {ColorCubeComponent} from '../color-cube/color-cube.component';
import {RouterTestingModule} from '@angular/router/testing';
describe('ColorCubeListComponent', () => {
  let component: ColorCubeListComponent;
  let fixture: ComponentFixture<ColorCubeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ColorCubeListComponent,
        HeaderComponent,
        SearchComponent,
        ColorCubeComponent ],
      providers: [
        {
          provide: ColorCubeService,
          useValue: {
            getColors: () => of(COLORS)
          }
        }
      ]
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
    expect(component.colors).toEqual(COLORS);
  });

  it('should create with empty array when get an error', () => {
    const debugFixture = TestBed.createComponent(ColorCubeListComponent);
    const debugElement = debugFixture.debugElement.componentInstance;
    const error = {msg: 'Testing Error'};
    spyOn(debugElement.colorCubeService, 'getColors').and.returnValue(throwError(error));
    const console = spyOn(window.console, 'error');
    debugFixture.detectChanges();
    expect(debugElement).toBeTruthy();
    expect(debugElement.colors).toEqual([]);
    expect(console).toHaveBeenCalledWith(error);
  });

  it('should get filtered colors', () => {
    const filteredColors = [...COLORS];
    filteredColors.pop();
    component.onFilteredColors(filteredColors);
    expect(component.filteredColors).toEqual(filteredColors);
  });
});
