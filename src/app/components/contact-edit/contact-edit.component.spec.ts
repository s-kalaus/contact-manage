import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {DatabaseService} from '../../services/database.service';
import {ContactEditComponent} from './contact-edit.component';

describe('ContactEditComponent', () => {
  let component: any;
  let subscription: any;
  let resolve: any;
  let reject: any;
  let fixture: ComponentFixture<ContactEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactEditComponent],
      providers: [
        {
          provide: DatabaseService,
          useValue: {
            getById: jasmine.createSpy('getById').and
              .returnValue({
                then: (_resolve: any, _reject: any) => {
                  resolve = _resolve;
                  reject = _reject;
                }
              }),
            update: jasmine.createSpy('update').and
              .returnValue({then: (_resolve: any) => resolve = _resolve})
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: new Observable(_subscription => subscription = _subscription)
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.overrideComponent(ContactEditComponent, {set: {template: ''}}).createComponent(ContactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Function: ngOnInit', () => {
    it('should exist', () => {
      expect(component.ngOnInit).toEqual(jasmine.any(Function));
    });

    it('should call databaseService.getById', () => {
      component.contactId = 1;
      component.ngOnInit();
      expect(component.databaseService.getById).toHaveBeenCalledWith(1);
    });

    it('should call router.navigate on reject', () => {
      component.contactId = 1;
      component.ngOnInit();
      reject();
      expect(component.router.navigate).toHaveBeenCalledWith(['/']);
    });

    it('should update contact on success', () => {
      component.contactId = 1;
      component.ngOnInit();
      resolve({test: 1});
      expect(component.contact).toEqual({test: 1});
    });
  });

  describe('Function: submit', () => {
    it('should exist', () => {
      expect(component.submit).toEqual(jasmine.any(Function));
    });

    it('should call databaseService.update', () => {
      component.contactId = 1;
      component.submit({test: 1});
      expect(component.databaseService.update).toHaveBeenCalledWith(1, {test: 1});
    });

    it('should call router.navigate', () => {
      component.contactId = 1;
      component.submit({test: 1});
      resolve();
      expect(component.router.navigate).toHaveBeenCalledWith(['/']);
    });
  });
});
