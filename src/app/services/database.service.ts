import {Injectable} from '@angular/core';
import {BrowserDatabase} from 'browser-database';

import {Contact} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  /*
   * Model name
   */
  private readonly contactModel = 'contact';

  /*
   * Local database reference
   */
  private browserDatabase: BrowserDatabase = new BrowserDatabase();

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
  get(contactId: number | string) {

    return this.browserDatabase.getById(this.contactModel, contactId);
  }
}
