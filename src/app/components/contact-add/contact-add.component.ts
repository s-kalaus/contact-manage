import {Component} from '@angular/core';

import {DatabaseService} from '../../services/database.service';
import {Contact} from '../../interfaces';

/*
 * Contact Add
 */
@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html'
})
export class ContactAddComponent {

  /*
   * Constructor
   *
   * @param databaseService DatabaseService
   */
  constructor(
    private databaseService: DatabaseService
  ) {}

  /*
   * Submit contact
   *
   * @param model Contact
   */
  submit(model: Contact) {

    this.databaseService.insert(model);
  }
}
