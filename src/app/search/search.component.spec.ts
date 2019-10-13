import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { COLORS } from './_mock_/search.mock';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit null value when search Rule is empty', () => {
    const searchRule = '';
    const filterEmitter = spyOn(component.filteredColors, 'emit');
    component.filterColor(COLORS, searchRule);
    expect(filterEmitter).toHaveBeenCalledWith(null);
  });

  it('should emit filtered colors', () => {
    const color = COLORS[0];
    const searchRule = color.name;
    const filterEmitter = spyOn(component.filteredColors, 'emit');
    component.filterColor(COLORS, searchRule);
    expect(filterEmitter).toHaveBeenCalledWith([color]);
  });
});
