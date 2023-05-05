import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GithubProfilesService {
  async getUser(user: string) {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    return response.data;
  }
  async getUserRepos(user: string) {
    const response = await axios.get(`https://api.github.com/users/${user}/repos?sort=created`);
    return response.data;
  }
}
