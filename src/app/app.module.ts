import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TiffListComponent } from './tiff-list.component';
import { TiffListPageComponent } from './tiff-list-page.component';
import { TiffEditorComponent } from './tiff-editor.component';
import { TiffEditorPageComponent } from './tiff-editor-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TiffListComponent,
    TiffListPageComponent,
    TiffEditorComponent,
    TiffEditorPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
