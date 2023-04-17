import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class DadJokesService {
  config = {
    headers: {
      Accept: 'application/json',
    },
  }
  async getJoke() {
    const response = await axios.get(`https://icanhazdadjoke.com`, this.config);
    return response.data;
  }
}
