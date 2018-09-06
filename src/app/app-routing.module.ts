import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactAddComponent } from './components/contact-add/contact-add.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';

const routes: Routes = [
  { path: 'add', component: ContactAddComponent },
  { path: 'contact/:contactId', component: ContactEditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
