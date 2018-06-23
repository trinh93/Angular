import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  person = [];
  firstname;
  lastname;
  username;
  password;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getUser().subscribe((data) => {
      this.person = data;
    });
  }

  registerUser() {
    this.http.registerUser(
      this.firstname,
      this.lastname,
      this.username,
      this.password
    ).subscribe((data) => {
      console.log(data);
    });
  }

}
