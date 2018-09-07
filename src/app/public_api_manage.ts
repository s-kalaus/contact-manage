import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ContactAddComponent} from './components/contact-add/contact-add.component';
import {ContactEditComponent} from './components/contact-edit/contact-edit.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {DatabaseService} from './services/database.service';

export * from './components/contact-add/contact-add.component';
export * from './components/contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    ContactAddComponent,
    ContactEditComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactAddComponent,
    ContactEditComponent,
    ContactFormComponent
  ],
  providers: [
    DatabaseService
  ]
})
export class ContactManageModule {
}
