import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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
   * Opened contact
   */
  private contact: Contact = null;

  /*
   * Constructor
   *
   * @param databaseService DatabaseService
   * @param activatedRoute ActivatedRoute
   * @param router Router
   */
  constructor(
    private databaseService: DatabaseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  /*
   * ngOnInit
   */
  ngOnInit() {

    this.activatedRoute.params.subscribe(params => this.getContact(params.contactId));
  }

  /*
   * Update contact
   *
   * @param contactId ID of opened contact
   */
  getContact(contactId: number) {

    if (!contactId) {
      return;
    }

    this.databaseService.get(contactId)
      .then(
        (_contact: Contact) => this.contact = _contact,
        () => this.router.navigate(['/'])
      );
  }

  /*
   * Update contact
   *
   * @param model Contact
   */
  submit(model: Contact) {

    this.databaseService.update(this.contact.id, model)
      .then(() => this.router.navigate(['/']));
  }
}
