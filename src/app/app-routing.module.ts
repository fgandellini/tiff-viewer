import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TiffListPageComponent } from './tiff-list-page.component';
import { TiffEditorPageComponent } from './tiff-editor-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/tiffs', pathMatch: 'full' },
  { path: 'tiffs', component: TiffListPageComponent },
  { path: 'tiffs/:id', component: TiffEditorPageComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
