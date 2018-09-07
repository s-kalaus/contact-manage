import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

/*
 * Demo Edit
 */
@Component({
  selector: 'app-demo-edit',
  templateUrl: './demo-edit.component.html'
})
export class DemoEditComponent implements OnInit {

  /*
   * Current contact id
   */
  private contactId: number = null;

  /*
   * Constructor
   *
   * @param activatedRoute ActivatedRoute
   */
  constructor(
      private activatedRoute: ActivatedRoute
  ) {
  }

  /*
   * ngOnInit
   */
  ngOnInit() {

    this.activatedRoute.params.subscribe(params => this.contactId = params.contactId);
  }
}
