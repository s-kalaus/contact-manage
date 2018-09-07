import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {DatabaseService} from '../../services/database.service';
import {Contact} from '../../interfaces';

/*
 * Contact Edit
 */
@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html'
})
export class ContactEditComponent implements OnInit {

  /*
   * Current contact id
   */
  @Input() contactId: number = null;

  /*
   * Back Url
   */
  @Input() backUrl: string[] = ['/'];

  /*
   * Opened contact
   */
  contact: Contact = null;

  /*
   * Constructor
   *
   * @param databaseService DatabaseService
   * @param router Router
   */
  constructor(
      private databaseService: DatabaseService,
      private router: Router
  ) {
  }

  /*
   * ngOnInit
   */
  ngOnInit() {

    this.databaseService.getById(this.contactId)
        .then(
            (_contact: Contact) => this.contact = _contact,
            () => this.router.navigate(this.backUrl)
        );
  }

  /*
   * Update contact
   *
   * @param model Contact
   */
  submit(model: Contact) {

    this.databaseService.update(this.contact.id, model)
        .then(() => this.router.navigate(this.backUrl));
  }
}
