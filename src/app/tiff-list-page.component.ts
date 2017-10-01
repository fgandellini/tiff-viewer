import { Component, OnInit } from '@angular/core';
import { TiffDescriptor } from './types';
import { TiffService } from './tiff.service';

import { Router } from '@angular/router';

@Component({
  selector: 'tiff-list-page',
  template: `
    <h2>Available tiff files</h2>
    <tiff-list
      [tiffs]="tiffs"
      (select)="goToEditor($event)">
    </tiff-list>
  `,
  providers: [ TiffService ],
})
export class TiffListPageComponent implements OnInit {
  tiffs: TiffDescriptor[];

  constructor(
    private router: Router,
    private tiffService: TiffService,
  ) {}

  ngOnInit(): void {
    this.getTiffs();
  }

  getTiffs(): void {
    this.tiffService.getTiffs()
      .then(tiffs => this.tiffs = tiffs);
  }

  goToEditor(tiff: TiffDescriptor): void {
    this.router.navigate(['/tiffs', tiff.id]);
  }
}
