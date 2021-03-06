import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

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
     },
     (error: any)=>{
     }
   )
  }
  constructor(public httpServiceService:HttpService) { }

  ngOnInit() {
    
    this.searchUserName('Ammoh-Moringa');
  }

}




