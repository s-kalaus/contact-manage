import {inject, TestBed} from '@angular/core/testing';

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

  describe('Function: getById', () => {
    it('should exist', inject([DatabaseService], (service: any) => {
      expect(service.getById).toEqual(jasmine.any(Function));
    }));

    it('should call browserDatabase.getById', inject([DatabaseService], (service: any) => {
      spyOn(service.browserDatabase, 'getById');
      service.getById(1);
      expect(service.browserDatabase.getById).toHaveBeenCalledWith('contact', 1);
    }));
  });

  describe('Function: getAll', () => {
    it('should exist', inject([DatabaseService], (service: any) => {
      expect(service.getAll).toEqual(jasmine.any(Function));
    }));

    it('should call browserDatabase.getAll', inject([DatabaseService], (service: any) => {
      spyOn(service.browserDatabase, 'getAll');
      service.getAll();
      expect(service.browserDatabase.getAll).toHaveBeenCalledWith('contact');
    }));
  });

  describe('Function: loadFilter', () => {
    it('should exist', inject([DatabaseService], (service: any) => {
      expect(service.loadFilter).toEqual(jasmine.any(Function));
    }));

    it('should call browserDatabase.getById', inject([DatabaseService], (service: any) => {
      spyOn(service.browserDatabase, 'getById').and.callThrough();
      service.loadFilter();
      expect(service.browserDatabase.getById).toHaveBeenCalledWith('contact-filter', 'contact');
    }));

    it('should call createDefaultFilter', inject([DatabaseService], (service: any) => {
      let reject = jasmine.createSpy('reject');
      spyOn(service, 'createDefaultFilter');
      spyOn(service.browserDatabase, 'getById').and.returnValue({catch: (_reject: any) => reject = _reject});
      service.loadFilter();
      reject();
      expect(service.createDefaultFilter).toHaveBeenCalledWith();
    }));
  });

  describe('Function: createDefaultFilter', () => {
    it('should exist', inject([DatabaseService], (service: any) => {
      expect(service.createDefaultFilter).toEqual(jasmine.any(Function));
    }));

    it('should call browserDatabase.insert', inject([DatabaseService], (service: any) => {
      spyOn(service.browserDatabase, 'insert');
      service.createDefaultFilter();
      expect(service.browserDatabase.insert).toHaveBeenCalledWith('contact-filter', {
        id: 'contact',
        sortBy: 'id',
        sortDir: true,
        filter: {
          id: '',
          firstName: '',
          lastName: ''
        }
      });
    }));
  });

  describe('Function: saveFilter', () => {
    it('should exist', inject([DatabaseService], (service: any) => {
      expect(service.saveFilter).toEqual(jasmine.any(Function));
    }));

    it('should call browserDatabase.update', inject([DatabaseService], (service: any) => {
      spyOn(service.browserDatabase, 'update');
      service.saveFilter({test: 1});
      expect(service.browserDatabase.update).toHaveBeenCalledWith('contact-filter', 'contact', {test: 1});
    }));
  });
});
