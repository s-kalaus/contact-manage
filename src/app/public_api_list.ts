import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ContactListComponent} from './components/contact-list/contact-list.component';
import {DatabaseService} from './services/database.service';

export * from './components/contact-list/contact-list.component';

@NgModule({
  declarations: [
    ContactListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ContactListComponent
  ],
  providers: [
    DatabaseService
  ]
})
export class ContactListModule {
}
