import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

import {DatabaseService} from '../../services/database.service';
import {DemoEditComponent} from './contact-edit.component';

describe('DemoEditComponent', () => {
  let component: any;
  let subscription: any;
  let fixture: ComponentFixture<DemoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoEditComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: new Observable(_subscription => subscription = _subscription)
          }
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.overrideComponent(DemoEditComponent, {set: {template: ''}}).createComponent(DemoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
