import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ApiService, ApiProps } from '@api';
import { UIStoreService } from '@ui';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  public screenshots = {
    titleWorkflow: {
      slug: '/assets/img/title-workflow/',
      img: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
    },
    loanDelegator: {
      slug: '/assets/img/loan-delegator/',
      img: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
    },
    docPortfolio: {
      slug: '/assets/img/doc-portfolio/',
      img: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']
    },
    docSplit: {
      slug: '/assets/img/doc-split/',
      img: ['1.jpg', '2.jpg', '3.jpg']
    },
    leadMarketplace: {
      slug: '/assets/img/lead-marketplace/',
      img: ['1.png']
    },
  }

  /** Hold subs for unsub */
  private subs: Subscription[] = [];

  constructor(
    private api: ApiService,
    public ui: UIStoreService,
    private fb: FormBuilder
  ) {
  }

  public ngOnInit() {

  }


  ngOnDestroy() {
    if (this.subs.length) { this.subs.forEach(sub => sub.unsubscribe()); } // Unsub
  }

}
