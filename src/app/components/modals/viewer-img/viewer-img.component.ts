import { Component, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-viewer-img',
  templateUrl: './viewer-img.component.html',
  styleUrls: ['./viewer-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewerImgComponent implements OnInit {

  public data: any; // Data is actually passed through the modal service not here
  public dataAlt: any; // Data is actually passed through the modal service not here
  public onSuccess: EventEmitter<any> = new EventEmitter();

  public imgCurrentIndex = 0;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  /**
   * Change Image
   * @param next
   */
  public imageChange(next = true) {
    if (next) {
      this.imgCurrentIndex = this.imgCurrentIndex < this.data.img.length - 1 ? this.imgCurrentIndex + 1 : 0;
    } else {
      this.imgCurrentIndex = this.imgCurrentIndex > 0 ? this.imgCurrentIndex - 1 : this.data.img.length - 1;
    }
  }

}
