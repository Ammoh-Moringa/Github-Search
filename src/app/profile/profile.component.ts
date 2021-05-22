import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: any;
  repos: any;
  followers: any;
  following: any;
  username!: string;
  notFound = false;

  constructor(private service: ProfileService) { }

  searchUser() {
    this.service.updateFields(this.username);
    this.service.getProfileData()
      .subscribe((profile: any) => {
      
        this.userProfile = profile;
      }, (error: any) => {
        this.notFound = !this.notFound;
      });
  
    this.username = '';

    this.service.getRepoData()
      .subscribe((repos: any) => {
        this.repos = repos;
        
      });

    this.service.getFollowers()
      .subscribe((followers: any) => {
        this.followers = followers;
      })

    this.service.getFollowing()
      .subscribe((following: any) => {
        this.following = following;
      })
  }

  ngOnInit() {
  }

}
