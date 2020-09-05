import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  responseGet: any;
  responsePost: any;
  responseDelete: any;

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get('https://www.thorsten-rintelen.de/v1/users')
      .subscribe((response) => {
        this.responseGet = response;
      });

    this.httpClient
      .post('https://www.thorsten-rintelen.de/v1/users/1', {})
      .subscribe((response) => {
        this.responsePost = response;
      });

    this.httpClient
      .delete('https://www.angular.io/api/v2/users/12')
      .subscribe((response) => {
        this.responseDelete = response;
      });
  }
}
