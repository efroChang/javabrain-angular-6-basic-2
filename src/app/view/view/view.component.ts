import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  userName: string = 'efroChang';
  userInfo: any;
  userInfoLoaded: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public getUserInfo() {
    let url: string = `https://api.github.com/users/${this.userName}`;
    this.http.get(url).subscribe(
      (response) => {
        console.log(response);
        this.userInfoLoaded = true;
        this.userInfo = response;
      }
    );
  }
}
