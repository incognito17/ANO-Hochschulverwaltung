import { TestBed, async, inject } from '@angular/core/testing';

import { AenderungenSpeichernGuardGuard } from './aenderungen-speichern-guard.guard';

describe('AenderungenSpeichernGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AenderungenSpeichernGuardGuard]
    });
  });

  it('should ...', inject([AenderungenSpeichernGuardGuard], (guard: AenderungenSpeichernGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
