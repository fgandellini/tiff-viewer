import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TiffDescriptor } from './types';

@Component({
  selector: 'tiff-list',
  templateUrl: './tiff-list.component.html',
  styleUrls: ['./tiff-list.component.css'],
})
export class TiffListComponent {
  @Input()
  tiffs: TiffDescriptor[] = [];

  @Output()
  select: EventEmitter<TiffDescriptor> = new EventEmitter<TiffDescriptor>();

  onSelect(tiff: TiffDescriptor): void {
    this.select.emit(tiff);
  }
}
