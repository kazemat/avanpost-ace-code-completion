import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MetadataService } from './services/metadata.service';
import { EditorComponent } from './editor/editor.component';

import { AceEditorModule } from 'ng2-ace-editor';
import { CompleterService } from './services/completer.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AceEditorModule ],
  declarations: [ AppComponent, EditorComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ MetadataService, CompleterService ]
})
export class AppModule { }
