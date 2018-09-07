// import {async, ComponentFixture, TestBed} from '@angular/core/testing';
//
// import {DatabaseService} from '../../services/database.service';
// import {ContactListComponent} from './contact-add.component';
//
// describe('ContactAddComponent', () => {
//   let component: any;
//   let fixture: ComponentFixture<ContactListComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ContactListComponent],
//       providers: [
//         {
//           provide: DatabaseService,
//           useValue: {
//             insert: jasmine.createSpy('insert')
//           }
//         }
//       ]
//     });
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.overrideComponent(ContactListComponent, {set: {template: ''}}).createComponent(ContactListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//   describe('Function: submit', () => {
//     it('should exist', () => {
//       expect(component.submit).toEqual(jasmine.any(Function));
//     });
//
//     it('should call databaseService.insert', () => {
//       component.submit({test: 1});
//       expect(component.databaseService.insert).toHaveBeenCalledWith({test: 1});
//     });
//   });
//
// });
