import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {environment} from '../../environments/environment';
import {COLORS} from './_mock_/color-cube.mock';
import { ColorCubeService } from './color-cube.service';

describe('ColorCubeService', () => {
  let injector: TestBed;
  let service: ColorCubeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
      declarations: []
    });

    injector = getTestBed();
    service = injector.get(ColorCubeService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should create color', () => {
    const { name, color } = { name: 'Red', color: '#FF00000'};
    service.createColor(name, color).subscribe();

    const req = httpMock.expectOne(`${environment.service}/colors`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({name, color});
  });

  it('should get all colours', () => {
    service.getColors().subscribe(colors => {
      expect(colors).toEqual(COLORS);
    });

    const req = httpMock.expectOne(`${environment.service}/colors`);
    expect(req.request.method).toBe('GET');
    req.flush(COLORS);
  });

  it('should get one color', () => {
    const id = 1;
    const color = COLORS[id];
    service.getColor(id).subscribe((responseColor) => {
      expect(responseColor).toEqual((color));
    });

    const req = httpMock.expectOne(`${environment.service}/colors/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(color);
  });

  it('should edit color', () => {
    const id = 1;
    const { name, color } = { name: 'Grey', color: '#c7c7c7' };
    // const editedColor = Object.assign({}, COLORS[id]);
    const editedColor = {...COLORS[id]};
    editedColor.name = name;
    editedColor.color = color;
    service.editColor(editedColor.id, editedColor.name, editedColor.color).subscribe();
    const req = httpMock.expectOne(`${environment.service}/colors/${editedColor.id}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(editedColor);
  });
});
