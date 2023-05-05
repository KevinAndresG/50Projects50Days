import { Component } from '@angular/core';
import { GithubProfilesService } from '../services/github-profiles.service';

@Component({
  selector: 'app-github-profiles',
  templateUrl: './github-profiles.component.html',
  styleUrls: ['./github-profiles.component.scss']
})
export class GithubProfilesComponent {
  pict: string = '';
  name: string = '';
  followers: number = 0;
  following: number = 0;
  repos: number = 0;
  firstRepos: any = [];
  haveUser = false;
  constructor(private gihubProfilesService: GithubProfilesService) { }
  getUser(e: Event) {
    const val = e.target as HTMLInputElement
    const valSave = val.value
    this.firstRepos = [];
    if (val.value) {
      this.gihubProfilesService.getUser(valSave).then(res => {
        this.pict = res.avatar_url;
        this.name = res.login;
        this.followers = res.followers
        this.following = res.following
        this.repos = res.public_repos
        this.haveUser = true
        val.value = '';
      })
      this.gihubProfilesService.getUserRepos(valSave).then(resp => {
        let n = 0;
        while (n < 5) {
          this.firstRepos.push(resp[n])
          n++
        }
      })
    }
  }
}
