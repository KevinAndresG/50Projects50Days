import { Component, OnInit } from '@angular/core';
import { DadJokesService } from '../services/dad-jokes.service';

@Component({
  selector: 'app-dad-jokes',
  templateUrl: './dad-jokes.component.html',
  styleUrls: ['./dad-jokes.component.scss']
})
export class DadJokesComponent implements OnInit {
  constructor(private dadJokesService: DadJokesService) {
  }
  joke = ''
  ngOnInit() {
    this.generateJoke()
  }
  generateJoke() {
    this.dadJokesService.getJoke().then(resp => {
      this.joke = resp.joke
    })
  }
}
