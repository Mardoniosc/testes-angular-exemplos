import { TestBed } from '@angular/core/testing';

import { LocalService } from './local.service';

/**
 * @Test Testando com services  sincronos
 */

describe('LocalService', () => {
  let service: LocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar uma String', () => {
    expect(service.getInfoLocal()).toBeInstanceOf(String)
  })

  it('Deve retornar um Number', () => {
    expect(service.getNumberLocal()).toBeInstanceOf(Number)
  })

});
