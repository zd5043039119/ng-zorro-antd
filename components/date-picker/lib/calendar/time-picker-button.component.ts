/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';

@Component({
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:component-selector
  selector: 'time-picker-button',
  exportAs: 'timePickerButton',
  templateUrl: 'time-picker-button.component.html'
})
export class TimePickerButtonComponent {
  @Input() locale: NzCalendarI18nInterface;
  @Input() timePickerDisabled: boolean = false;

  @Input() showTimePicker: boolean = false;
  @Output() readonly showTimePickerChange = new EventEmitter<boolean>();

  prefixCls: string = 'ant-calendar';

  onClick(): void {
    this.showTimePicker = !this.showTimePicker;
    this.showTimePickerChange.emit(this.showTimePicker);
  }
}
