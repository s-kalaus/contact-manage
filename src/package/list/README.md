# contact-list

Bootstrap 4 / Angular based list of contacts angular component.

[![travis ci](https://travis-ci.org/s-kalaus/contact-manage.svg?branch=master)](https://travis-ci.org/s-kalaus/contact-manage) [![npm version](https://badge.fury.io/js/contact-list.svg)](https://badge.fury.io/js/contact-list)

[Coverage Report](https://s-kalaus.github.io/contact-manage/coverage/index.html)

[Documentation](https://s-kalaus.github.io/contact-manage/documentation/index.html)

[Demo](https://s-kalaus.github.io/contact-manage/demo/index.html)
## Installation
`npm install contact-list` - install package
## Usage
```
import {ContactListModule} from 'contact-list';

@NgModule({
  imports: [
    ContactListModule
  ]
})
export class AppModule {
}
```
And use in template:
```
<app-contact-list></app-contact-list>
```
Or in routing:
```
const routes: Routes = [
  {path: '', component: ContactListComponent}
];
```
As a result you should see the page with contacts list