import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../services/movie-app.service';
import { MovieModel } from '../models/movies.model';

@Component({
  selector: 'app-movie-app',
  templateUrl: './movie-app.component.html',
  styleUrls: ['./movie-app.component.scss']
})
export class MovieAppComponent implements OnInit {
  movies: MovieModel[] = []
  constructor(private movieAppService: MovieAppService) { }
  ngOnInit(): void {
    this.movieAppService.getMovies().then(resp => {
      this.movies = resp.results;
    })
  }
  search(e: Event) {
    const val = e.target as HTMLInputElement
    if (val.value !== '') {
      this.movieAppService.getSearchMovies(val.value).then(resp => {
        this.movies = resp.results;
      })
    }
    else {
      this.movieAppService.getMovies().then(resp => {
        this.movies = resp.results;
      })
    }
  }
}
