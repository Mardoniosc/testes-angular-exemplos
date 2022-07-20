import { TestBed } from '@angular/core/testing';
import { FakeService } from './dependencies/fake.service';
import { ValueService } from './dependencies/value.service';

import { MasterService } from './master.service';

describe('MasterService', () => {
  let service: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterService);
  });

  it('Deve criar o servico', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue deve retornar valor real do serviço real', () => {
    service = new MasterService(new ValueService());
    expect(service.getValueMaster()).toBe('Value string');
  });

  it('#getValue deve retornar valor falsificado de um fakeService', () => {
    service = new MasterService(new FakeService());
    expect(service.getValueMaster()).toBe('fake service');
  });

  it('#getValue deve retornar valor falsificado de um objeto falso', () => {
    const fake =  { getValue: () => 'fake value' };
    service = new MasterService(fake as ValueService);
    expect(service.getValueMaster()).toBe('fake value');
  });

  it('#getValue deve retornar stubbed value de uma spy', () => {
    // criar spy `getValue` em um objeto que representa o ValueService
    const valueServiceSpy =
      jasmine.createSpyObj('ValueService', ['getValue']);

    // defina o valor para retornar quando o spy `getValue` for chamado
    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);

    service = new MasterService(valueServiceSpy);

    expect(service.getValueMaster())
      .withContext('service returned stub value')
      .toBe(stubValue);
    expect(valueServiceSpy.getValue.calls.count())
      .withContext('spy method was called once')
      .toBe(1);
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });

});
