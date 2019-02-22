import { TestBed } from '@angular/core/testing';

import { StepRenderingServiceService } from './step-rendering-service.service';

describe('StepRenderingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StepRenderingServiceService = TestBed.get(StepRenderingServiceService);
    expect(service).toBeTruthy();
  });
});
