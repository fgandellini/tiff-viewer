import { Component } from '@angular/core';

@Component({
  selector: 'tiff-editor-app',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
  styles: [`
    h1 {
      color: #5FAAFF;
      border-bottom: 1px solid #E6E6E6;
      margin-top: 0px;
    }
  `],
})
export class AppComponent {
  title = 'Tiff Editor';
}
