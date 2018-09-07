import {Component, OnInit} from '@angular/core';

import {DatabaseService} from '../../services/database.service';
import {Contact, ContactFilter} from '../../interfaces';

/*
 * Contact List
 */
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {

  /*
   * Contact Filter
   */
  contactFilter: ContactFilter = null;

  /*
   * List of contacts
   */
  contacts: Contact[] = [];

  /*
   * List of contacts
   */
  contactsFiltered: Contact[] = [];

  /*
   * Constructor
   *
   * @param databaseService DatabaseService
   */
  constructor(
      private databaseService: DatabaseService
  ) {
  }

  /*
   * ngOnInit
   */
  ngOnInit() {

    this.getList();

    this.databaseService.browserDatabase.subscribe((model: string) => model === this.databaseService.contactModel ? this.getList() : null);
    this.databaseService.loadFilter().then((filter: ContactFilter) => this.contactFilter = filter);
  }

  /*
   * Loads data from database
   */
  getList() {

    this.databaseService.getAll()
        .then(
            (contacts: Contact[]) => {
              this.contacts = contacts;
              this.filter();
            }
        );
  }

  /*
   * Filters result
   */
  filter() {

    setTimeout(() => {

      this.contactsFiltered = this.contacts
          .filter((contact: Contact) => Object.keys(this.contactFilter.filter)
              .reduce((valid, key) => (valid
                  ? (!this.contactFilter.filter[key] || contact[key].indexOf(this.contactFilter.filter[key]) !== -1)
                  : false
                ), true)
          )
          .sort((a: Contact, b: Contact) => {

            if (a[this.contactFilter.sortBy] < b[this.contactFilter.sortBy]) {
              return this.contactFilter.sortDir ? -1 : 1;
            }

            if (a[this.contactFilter.sortBy] > b[this.contactFilter.sortBy]) {
              return this.contactFilter.sortDir ? 1 : -1;
            }

            return 0;
          });

      this.saveFilter();
    });
  }

  /*
   * Sorts by column
   *
   * @param field Filed name
   */
  sort(field: string) {

    this.contactFilter.sortDir = this.contactFilter.sortBy === field ? !this.contactFilter.sortDir : true;
    this.contactFilter.sortBy = field;

    this.filter();
  }

  /*
   * Saves filter state to database
   */
  saveFilter() {

    this.databaseService.saveFilter(this.contactFilter);
  }
}
