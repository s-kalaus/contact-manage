import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatabaseService} from '../../services/database.service';
import {ContactAddComponent} from './contact-add.component';

describe('ContactAddComponent', () => {
  let component: any;
  let fixture: ComponentFixture<ContactAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactAddComponent],
      providers: [
        {
          provide: DatabaseService,
          useValue: {
            insert: jasmine.createSpy('insert')
          }
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.overrideComponent(ContactAddComponent, {set: {template: ''}}).createComponent(ContactAddComponent);
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

    it('should call databaseService.insert', () => {
      component.submit({test: 1});
      expect(component.databaseService.insert).toHaveBeenCalledWith({test: 1});
    });
  });

});
