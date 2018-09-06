import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {DatabaseService} from '../../services/database.service';
import {ContactEditComponent} from './contact-edit.component';

describe('ContactEditComponent', () => {
  let component: any;
  let subscription: any;
  let resolve: any;
  let fixture: ComponentFixture<ContactEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactEditComponent],
      providers: [
        {
          provide: DatabaseService,
          useValue: {
            update: jasmine.createSpy('update').and.returnValue(new Promise(_resolve => resolve = _resolve))
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

  describe('Function: submit', () => {
    it('should exist', () => {
      expect(component.submit).toEqual(jasmine.any(Function));
    });

    it('should call databaseService.update', () => {
      component.contact = {id: 1};
      component.submit({test: 1});
      expect(component.databaseService.update).toHaveBeenCalledWith(1, {test: 1});
    });

    it('should call router.navigate', () => {
      component.contact = {id: 1};
      component.submit({test: 1});
      resolve();
      expect(component.router.navigate).toHaveBeenCalledWith(['/']);
    });
  });

});
