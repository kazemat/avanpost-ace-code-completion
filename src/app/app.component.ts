import { Component } from '@angular/core';
import { MetadataService } from './services/metadata.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  metadata$ = this.service.getMetadata();
  constructor(private service: MetadataService) {}
}
