import { TestBed } from '@angular/core/testing';

import { GestorDeCitasMedicasService } from './gestor-de-citas-medicas.service';

describe('GestorDeCitasMedicasService', () => {
  let service: GestorDeCitasMedicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorDeCitasMedicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
