import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContactAddComponent} from 'contact-manage';

import {DemoEditComponent} from './components/demo/demo-edit/demo-edit.component';

const routes: Routes = [
  {path: '', component: ContactAddComponent},
  {path: 'contact/:contactId', component: DemoEditComponent}
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
export class AppRoutingModule {
}
