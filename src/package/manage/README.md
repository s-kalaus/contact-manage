# contact-manage

Bootstrap 4 / Angular based add/edit form for contacts

[![travis ci](https://travis-ci.org/s-kalaus/contact-manage.svg?branch=master)](https://travis-ci.org/s-kalaus/contact-manage) [![npm version](https://badge.fury.io/js/contact-manage.svg)](https://badge.fury.io/js/contact-manage)

[Coverage Report](https://s-kalaus.github.io/contact-manage/coverage/class/index.html)
## Installation
`npm install contact-manage` - install package
## Usage
```
import {ContactManageModule} from 'contact-manage';

@NgModule({
  imports: [
    ContactManageModule
  ]
})
export class AppModule {
}
```
And use in template:
```
<app-contact-add></app-contact-add>

<app-contact-edit
        [backUrl]="['/']"
        [contactId]="id"
></app-contact-edit>
```
Or in routing:
```
const routes: Routes = [
  {path: 'add', component: ContactAddComponent}
  {path: 'edit/:id', component: ContactEditComponent}
];
```
As a result you should see the page with contact form in add or edit mode