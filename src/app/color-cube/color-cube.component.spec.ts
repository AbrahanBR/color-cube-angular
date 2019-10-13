import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCubeComponent } from './color-cube.component';
import {Router} from '@angular/router';
import {noop} from 'rxjs';

describe('ColorCubeComponent', () => {
let component: ColorCubeComponent;
let fixture: ComponentFixture<ColorCubeComponent>;

beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ ColorCubeComponent ],
providers: [{
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
fixture = TestBed.createComponent(ColorCubeComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});

it('should redirect to color selected', () => {
const id = 10;
const debugElement = fixture.debugElement.componentInstance;
const redirect = spyOn(debugElement.router, 'navigate');
debugElement.editColor(id);

expect(redirect).toHaveBeenCalledWith(['/colors', id]);
});
});
