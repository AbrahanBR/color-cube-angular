import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorManagementComponent } from './color-management.component';
import { ColorCubeService } from '../color-cube/color-cube.service';
import { Router, ActivatedRoute } from '@angular/router';
import { COLOR } from './_mock_/color-management.mock';
import { noop, of, throwError } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { DialogTesingComponent } from '../dialog/_mock_/dialog.mock';
import { HttpErrorResponse } from '@angular/common/http';


describe('ColorManagementComponent', () => {
  let component: any;
  let fixture: ComponentFixture<ColorManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ColorManagementComponent, DialogTesingComponent],
      providers: [
        {
          provide: ColorCubeService,
          useValue: {
            getColor: () => of(COLOR),
            createColor: () => of({}),
            editColor: () => of({})
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: noop
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => COLOR.id
              }
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorManagementComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should creat new color', () => {
    const colorName = 'White';
    const color = '#FFF';
    const redirectURL =  '/list';
    const errorResponse = {error: 'Mock Error', status: 500} ;
    const router = spyOn(component.router, 'navigate').and.callThrough();
    const consoleError = spyOn(console, 'error').and.callThrough();

    spyOn(component.colorCubeService, 'createColor').and.returnValues(of({}), throwError(errorResponse));

    // on Succes
    component.submitNewColor(colorName, color);
    expect(router).toHaveBeenCalledWith([redirectURL]);

    // on Error
    component.submitNewColor(colorName, color);
    expect(consoleError).toHaveBeenCalledWith(errorResponse);
  });

  it('should edit color', () => {
    const Id = 1;
    const colorName = 'White';
    const color = '#FFF';
    const redirectURL =  '/list';
    const errorResponse = {error: 'Mock Error', status: 500} ;
    const router = spyOn(component.router, 'navigate').and.callThrough();
    const consoleError = spyOn(console, 'error').and.callThrough();

    spyOn(component.colorCubeService, 'editColor').and.returnValues(of({}), throwError(errorResponse));

    // on Succes
    component.submitEditColor(Id, colorName, color);
    expect(router).toHaveBeenCalledWith([redirectURL]);

    // on Error
    component.submitEditColor(colorName, color);
    expect(consoleError).toHaveBeenCalledWith(errorResponse);
  });

  describe('submit type', () => {
    const form: NgForm = {
      value: COLOR
    } as NgForm;

    it('should submit new color', () => {
      const newColorFN = spyOn(component, 'submitNewColor');
      const { name, color } = COLOR;
      component.isNewColor = true;
      component.onSubmit(form);
      expect(newColorFN).toHaveBeenCalledWith(name, color);
    });

    it('should submit edit color', () => {
      const newColorFN = spyOn(component, 'submitEditColor');
      const { id, name, color } = COLOR;
      component.isNewColor = false;
      component.id = id;
      component.onSubmit(form);
      expect(newColorFN).toHaveBeenCalledWith(id, name, color);
    });
  });
});
