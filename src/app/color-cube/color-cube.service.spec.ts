import { TestBed } from '@angular/core/testing';

import { ColorCubeService } from './color-cube.service';

describe('ColorCubeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorCubeService = TestBed.get(ColorCubeService);
    expect(service).toBeTruthy();
  });
});
