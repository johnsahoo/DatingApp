import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  users:any;
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get("http://localhost:5269/api/Users").subscribe({
      next: Response => this.users = Response,
      error: error=> console.log(error),
      complete: () => console.log("Request has completed") 
    })
  }
}
