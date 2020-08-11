import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name: string;
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get('-----')
      .subscribe((data: any) => {
        console.log('data: ', data)
        this.name = data?.message
      });
  }
}
