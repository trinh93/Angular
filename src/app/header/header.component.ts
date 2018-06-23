import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  text = 'a';
  isOk = false;
  arrayA = [
    { name: 'Trinh', age: 25 },
    { name: 'Thinh', age: 25 }
  ];
  arrayB = [];
  value = 0;
  name = '';
  dt;
  textThuong: String;
  @Input() bien;
  @Output() tang = new EventEmitter();

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.text = 'b';
    this.dt = new Date();
    this.textThuong = 'TRINH Trinh TrINH';
    this.text = 'click';
    this.isOk = !this.isOk;
    this.http.getUser().subscribe((data) => {
      console.log(data);
      this.arrayB = data;
    });
  }
  add() {
    this.value++;
    // this.value = this.value + 1;
    this.tang.emit(this.value);
  }

}
