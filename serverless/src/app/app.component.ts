import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name: string;
  salutation: string;
  private api = ''

  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get(`${this.api}hello`)
      .subscribe((data: any) => {
        console.log('data: ', data)
        this.salutation = data?.message
      });
      this.http.get(`${this.api}get-name`)
      .subscribe((data: any) => {
        console.log('data: ', data)
        this.name = data?.Item.name
      });
  }
}
