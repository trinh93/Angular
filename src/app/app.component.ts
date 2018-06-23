import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angula';
  text = 'Welcome';
  da;
  @ViewChild(HeaderComponent) nameHeader: HeaderComponent;
  addApp(data) {
    this.da = data;
  }
  view() {
    this.nameHeader.name += 'a';
  }
}
