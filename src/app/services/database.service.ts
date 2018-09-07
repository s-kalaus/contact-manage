import {Injectable} from '@angular/core';
import {BrowserDatabase} from 'browser-database';

import {Contact, ContactFilter} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  /*
   * Contact model name
   */
  readonly contactModel = 'contact';

  /*
   * Contact filter model name
   */
  private readonly contactFilterModel = 'contact-filter';
  /*
   * Contact filter id
   */
  private readonly contactFilterId = 'contact';

  /*
   * Local database reference
   */
  public browserDatabase: BrowserDatabase = new BrowserDatabase();

  /*
   * Insert contact
   *
   * @param contact Contact
   */
  insert(contact: Contact) {

    return this.browserDatabase.insert(this.contactModel, contact);
  }

  /*
   * Insert contact
   *
   * @param contactId Contact id
   * @param contact New contact data
   */
  update(contactId: number | string, contact: Contact) {

    return this.browserDatabase.update(this.contactModel, contactId, contact);
  }

  /*
   * Get contact
   *
   * @param contactId Contact id
   */
  getById(contactId: number | string) {

    return this.browserDatabase.getById(this.contactModel, contactId);
  }

  /*
   * Get contacts
   */
  getAll() {

    return this.browserDatabase.getAll(this.contactModel);
  }

  /*
   * Loads filter from database
   */
  loadFilter() {

    return this.browserDatabase.getById(this.contactFilterModel, this.contactFilterId)
        .catch(() => this.createDefaultFilter());
  }

  /*
   * Creates default filter
   */
  createDefaultFilter() {

    return this.browserDatabase.insert(this.contactFilterModel, {
      id: this.contactFilterId,
      sortBy: 'id',
      sortDir: true,
      filter: {
        id: '',
        firstName: '',
        lastName: ''
      }
    });
  }

  /*
   * Saves filter to database
   *
   * @param filter Current filter
   */
  saveFilter(filter: ContactFilter) {

    return this.browserDatabase.update(this.contactFilterModel, this.contactFilterId, filter);
  }
}
