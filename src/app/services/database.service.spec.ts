import {TestBed, inject} from '@angular/core/testing';

import {DatabaseService} from './database.service';

describe('DatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseService]
    });
  });

  it('should be created and have defaults', inject([DatabaseService], (service: any) => {
    expect(service).toBeTruthy();
    expect(service.contactModel).toBe('contact');
    expect(service.browserDatabase).toEqual(jasmine.any(Object));
  }));

  describe('Function: insert', () => {
    it('should exist', inject([DatabaseService], (service: any) => {
      expect(service.insert).toEqual(jasmine.any(Function));
    }));

    it('should call browserDatabase.insert', inject([DatabaseService], (service: any) => {
      spyOn(service.browserDatabase, 'insert');
      service.insert({test: 1});
      expect(service.browserDatabase.insert).toHaveBeenCalledWith('contact', {test: 1});
    }));
  });

  describe('Function: update', () => {
    it('should exist', inject([DatabaseService], (service: any) => {
      expect(service.update).toEqual(jasmine.any(Function));
    }));

    it('should call browserDatabase.update', inject([DatabaseService], (service: any) => {
      spyOn(service.browserDatabase, 'update');
      service.update(1, {test: 1});
      expect(service.browserDatabase.update).toHaveBeenCalledWith('contact', 1, {test: 1});
    }));
  });

  describe('Function: get', () => {
    it('should exist', inject([DatabaseService], (service: any) => {
      expect(service.get).toEqual(jasmine.any(Function));
    }));

    it('should call browserDatabase.get', inject([DatabaseService], (service: any) => {
      spyOn(service.browserDatabase, 'getById');
      service.get(1);
      expect(service.browserDatabase.getById).toHaveBeenCalledWith('contact', 1);
    }));
  });
});
