import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ContactListModule} from 'contact-list';
import {ContactManageModule} from 'contact-manage';

import {AppRoutingModule} from './app-routing.module';
import {DemoComponent} from './components/demo/demo.component';
import {DemoEditComponent} from './components/demo/demo-edit/demo-edit.component';

@NgModule({
  declarations: [
    DemoComponent,
    DemoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactListModule,
    ContactManageModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class AppModule {
}
