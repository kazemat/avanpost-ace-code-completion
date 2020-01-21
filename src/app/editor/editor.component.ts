import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';

import { CompleterService } from './../services/completer.service';
import { MetaInfoModel } from './../models/metadata.model';

import * as ace from 'brace';
import 'brace/mode/python';
import 'brace/ext/language_tools';
import 'brace/snippets/python';
import 'brace/theme/monokai';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, AfterViewInit {
  @Input()
  metaInfo: MetaInfoModel[];
  script = 'import sys\n\nprint("test")';
  options = {
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true
  };

  @ViewChild('editor', {static: true})
  editor: any;

  constructor(private completer: CompleterService) { }

  ngOnInit() {

    this.completer.setMetadata(this.metaInfo);
  }


  ngAfterViewInit() {
    const langTools = ace.acequire('ace/ext/language_tools');

    langTools.addCompleter(this.completer);
  }

  

  getEditor(): ace.Editor {
    return this.editor['_editor'];
  }
}