import 'bootstrap';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { Router } from '@angular/router';
import { noop } from 'rxjs';

describe('DialogComponent', () => {
  let component: any;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: noop
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should handle direct', () => {
    const url = '/otherPage';

    const router = spyOn(component.router, 'navigate');
    component.handleRedirect(url);
    expect(router).toHaveBeenCalledWith([url]);
  });
});
