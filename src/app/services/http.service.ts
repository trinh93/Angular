import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = 'http://miyarin.tk/thinh/learn-angular/api';

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    const url = this.baseUrl + '/users';
    return this.http.get(url).pipe(
      tap(
        data => data,
        error => console.log(error)
      ),
      catchError(error => of())
    );
  }

  registerUser(fname, lname, uname, pword): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = this.baseUrl + '/users';
    const body = {
      firstname: fname,
      lastname: lname,
      username: uname,
      password: pword
    };
    return this.http.post(url, body, httpOptions).pipe(
      tap(
        data => data,
        error => console.log(error)
      ),
      catchError(error => of())
    );
  }
}
