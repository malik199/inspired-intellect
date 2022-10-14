import { Component, OnInit } from '@angular/core';
//import { movie_mocks } from 'src/assets/movie_mocks';
import { MovieService } from 'src/services/movies.service';
import { IflixMovies } from '../interfaces/iflix-movies';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.fetchMovies();
  }
  
}