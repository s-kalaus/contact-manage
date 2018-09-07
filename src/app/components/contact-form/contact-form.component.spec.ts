import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FormBuilder, Validators} from '@angular/forms';

import {DatabaseService} from '../../services/database.service';
import {ContactFormComponent} from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: any;
  let subscription: any;
  let resolve: any;
  let reject: any;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      providers: [
        {
          provide: DatabaseService,
          useValue: {
            getById: jasmine.createSpy('getById').and
              .returnValue({then: (_resolve: any, _reject: any) => { resolve = _resolve; reject = _reject; }}),
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
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        },
        FormBuilder
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.overrideComponent(ContactFormComponent, {set: {template: ''}}).createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.backUrl).toEqual([]);
    expect(component.model).toEqual({
      firstName: '',
      lastName: '',
      company: ''
    });
    expect(component.formErrors).toEqual({
      firstName: '',
      lastName: '',
      company: ''
    });
    expect(component.errors).toEqual({
      required: 'Field is required'
    });
    expect(component.save).toEqual(jasmine.any(EventEmitter));
    expect(component.form).toBeTruthy(jasmine.any(Object));
  });

  describe('Function: ngOnInit', () => {
    it('should exist', () => {
      expect(component.ngOnInit).toEqual(jasmine.any(Function));
    });

    it('should call form.setValue', () => {
      component.model = {
        firstName: 1,
        lastName: 2,
        company: 3
      };
      spyOn(component.form, 'setValue');
      component.ngOnInit();
      expect(component.form.setValue).toHaveBeenCalledWith({
        firstName: 1,
        lastName: 2,
        company: 3
      });
    });
  });

  describe('Function: createForm', () => {
    it('should exist', () => {
      expect(component.createForm).toEqual(jasmine.any(Function));
    });

    it('should call formBuilder.group', () => {
      spyOn(component.formBuilder, 'group').and.callThrough();
      component.createForm();
      expect(component.formBuilder.group).toHaveBeenCalledWith({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        company: ['']
      });
    });

    it('should call onValueChanged', () => {
      spyOn(component, 'onValueChanged');
      component.createForm();
      expect(component.onValueChanged).toHaveBeenCalledWith();
    });

    it('should subscribe to value changes', () => {
      spyOn(component, 'onValueChanged');
      spyOn(component.formBuilder, 'group').and.returnValue({valueChanges: {subscribe: jasmine.createSpy('subscribe')}});
      component.createForm();
      expect(component.form.valueChanges.subscribe).toHaveBeenCalledWith(jasmine.any(Function));
    });

    it('should react on to value changes', () => {
      let callback = () => jasmine.createSpy('callback');
      spyOn(component.form.valueChanges, 'subscribe').and.callFake((_callback: any) => callback = _callback);
      spyOn(component, 'onValueChanged');
      component.createForm();
      callback();
      expect(component.onValueChanged).toHaveBeenCalledWith();
    });
  });

  describe('Function: onValueChanged', () => {
    it('should exist', () => {
      expect(component.onValueChanged).toEqual(jasmine.any(Function));
    });

    it('should process errors', () => {
      component.errors = {
        a: 'q',
        b: 'w',
        c: 'e',
        d: 'r'
      };
      component.formErrors = {
        test1: '',
        test2: '',
        test3: '',
        test4: ''
      };
      spyOn(component.form, 'get').and.callFake((field: string) => {
        switch (field) {
          case 'test1': return {dirty: true, valid: false, errors: {a: true}};
          case 'test2': return {dirty: true, valid: true, errors: {b: true}};
          case 'test3': return {dirty: false, valid: true, errors: {c: true}};
          case 'test4': return {dirty: false, valid: false, errors: {d: true}};
        }
      });
      component.onValueChanged();
      expect(component.formErrors).toEqual({
        test1: 'q',
        test2: '',
        test3: '',
        test4: ''
      });
    });
  });

  describe('Function: onSubmit', () => {
    it('should exist', () => {
      expect(component.onSubmit).toEqual(jasmine.any(Function));
    });

    it('should call zone.run on invalid', () => {
      spyOn(component.zone, 'run');
      component.form = {invalid: true};
      component.onSubmit();
      expect(component.zone.run).toHaveBeenCalledWith(jasmine.any(Function));
    });

    it('should mark control as dirty', () => {
      spyOn(component, 'onValueChanged');
      component.form = {invalid: true, controls: {test1: {markAsDirty: jasmine.createSpy('markAsDirty')}}};
      component.onSubmit();
      expect(component.form.controls.test1.markAsDirty).toHaveBeenCalledWith();
      expect(component.onValueChanged).toHaveBeenCalledWith();
    });

    it('should call save.emit', () => {
      spyOn(component.save, 'emit', );
      component.form = {value: {test: 1}, reset: jasmine.createSpy('reset')};
      component.onSubmit();
      expect(component.save.emit).toHaveBeenCalledWith({test: 1});
      expect(component.form.reset).toHaveBeenCalledWith();
    });
  });
});
