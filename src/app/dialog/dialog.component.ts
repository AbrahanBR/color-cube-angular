import * as $ from 'jquery';

import { Component, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DIALOG_STATUS } from './dialog.enum';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit {
  private _isVisible: boolean;
  public readonly referenceId = 'dialogModal';

  @Input() title: string;
  @Input() text: string;
  @Input() link: string;
  @Input() set show(isVisible: boolean) {
    this._isVisible = isVisible;
    this.setModalStatus(isVisible ? DIALOG_STATUS.OPEN : DIALOG_STATUS.CLOSE);
  }

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.show = this._isVisible;
  }

  private setModalStatus(status: DIALOG_STATUS) {
    $(`#${this.referenceId}`).modal(status);
  }

  handleRedirect(url: string) {
    this.setModalStatus(DIALOG_STATUS.CLOSE);
    this.router.navigate([url]);
  }
}
