import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  users!:User[];

  searchUserName(username: string){
   this.httpServiceService.findUser(username).then(
     ()=>{
       this.users = this.httpServiceService.users;
       console.log(this.users);
     },
     (error: any)=>{
       console.log(error)
     }
   )
  }
  constructor() { }

  ngOnInit() {
    
    this.searchUserName('juma-moringa');
  }

}

