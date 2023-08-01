import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LiveUserService {

  constructor() { }
  async getUsers() {
    const response = await axios.get(`
    https://randomuser.me/api?results=50`);
    return response.data;
  }
}
