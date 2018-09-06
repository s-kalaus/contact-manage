import {Component, NgZone, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Contact} from '../../interfaces';

/*
 * Contact Form
 */
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {

  /*
   * Model reference
   */
  @Input() model: Contact = {
    firstName: '',
    lastName: '',
    company: ''
  };

  /*
   * Submit output
   */
  @Output() save: EventEmitter<Contact> = new EventEmitter<Contact>();

  /*
   * Form holder
   */
  form: FormGroup;

  /*
   * Common form errors
   */
  private readonly errors: any = {
    required: 'FIeld is required'
  };

  /*
   * Local form errors
   */
  formErrors: any = {
    firstName: '',
    lastName: '',
    company: ''
  };

  /*
   * Constructor
   *
   * @param zone NgZone
   * @param formBuilder FormBuilder
   */
  constructor(
    private zone: NgZone,
    private formBuilder: FormBuilder
  ) {

    this.createForm();

    this.form.setValue(this.model);
  }

  /*
   * ngOnInit
   */
  ngOnInit() {

    this.form.setValue({
      firstName: this.model.firstName,
      lastName: this.model.lastName,
      company: this.model.company
    });
  }

  /*
   * Creates form
   */
  createForm() {

    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      company: ['']
    });

    this.form.valueChanges
      .subscribe(() => this.onValueChanged());

    this.onValueChanged();
  }

  /*
   * Reacts on every value change
   */
  onValueChanged() {

    for (const field of Object.keys(this.formErrors)) {

      this.formErrors[field] = '';

      const control = this.form.get(field);

      if (control && control.dirty && !control.valid) {

        for (const key of Object.keys(control.errors)) {

          this.formErrors[field] = this.errors[key];

          break;
        }
      }
    }
  }

  /*
   * Main submit method
   */
  onSubmit() {

    if (this.form.invalid) {

      this.zone.run(() => {

        for (const key of Object.keys(this.form.controls)) {
          this.form.controls[key].markAsDirty();
        }

        this.onValueChanged();
      });

      return;
    }

    this.save.emit(this.form.value);
  }
}
