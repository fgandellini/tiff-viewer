import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { TiffFile } from './types';
import { TiffService } from './tiff.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'tiff-editor-page',
  template: `
  <div>
    <h2>Editing 
      <span *ngIf="!tiff">...</span>
      <span *ngIf="tiff">{{tiff.name | uppercase}}</span>
    </h2>
    <tiff-editor [tiff]="tiff"></tiff-editor>
  </div>
  <button (click)="goBack()">&laquo; Back to list</button>
  `,
  styles: [`
    button {
      border: none;
      background: none;
      margin-top: 20px;
      color: #999999;
      cursor: pointer;
    }
  `],
  providers: [ TiffService ],
})
export class TiffEditorPageComponent implements OnInit {
  tiff: TiffFile;

  constructor(
    private tiffService: TiffService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.tiffService.getTiff(+params.get('id')))
      .subscribe(tiff => this.tiff = tiff);
  }

  goBack(): void {
    this.location.back();
  }
}
