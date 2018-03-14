import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListingComponent implements OnInit {

  @Input() appName;
  @Input() screenshots;
  @Input() linkPrototype;
  @Input() progress;
  constructor() { }

  ngOnInit() {
  }

}
