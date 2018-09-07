import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {DemoComponent} from './components/demo/demo.component';
import {DemoEditComponent} from './components/demo/demo-edit/demo-edit.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactAddComponent} from './components/contact-add/contact-add.component';
import {ContactEditComponent} from './components/contact-edit/contact-edit.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    DemoComponent,
    DemoEditComponent,
    ContactListComponent,
    ContactAddComponent,
    ContactEditComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class AppModule {
}
