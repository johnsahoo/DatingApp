import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  users:any;
  constructor(private accountService: AccountService){

  }
  ngOnInit(): void {
    //this.getUsers();
    this.setCurrentUser();
  }

  // getUsers(){
  //   this.http.get("http://localhost:5269/api/Users").subscribe({
  //     next: response => this.users = response,
  //     error: error=> console.log(error),
  //     complete: () => console.log("Request has completed") 
  //   })
  // }

  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user:User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
