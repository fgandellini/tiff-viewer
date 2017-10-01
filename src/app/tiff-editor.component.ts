import { Component, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { TiffFile } from './types';
import Tiff from 'tiff.js';
import { decode } from 'base64-arraybuffer';

@Component({
  selector: 'tiff-editor',
  templateUrl: './tiff-editor.component.html',
  styleUrls: ['./tiff-editor.component.css'],
})
export class TiffEditorComponent implements OnChanges {
  @Input()
  tiff: TiffFile = null;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tiff.currentValue) {
      console.log(changes.tiff.currentValue);
      const content = decode(changes.tiff.currentValue.content);
      const t = new Tiff({ buffer: content });
      const canvas = t.toCanvas();
      const stage = this.elementRef.nativeElement.querySelector('.stage');
      canvas.style.maxWidth = '100%';
      stage.append(canvas);
    }

  }
}
