import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/services/movies.service';
import { IflixMovies } from '../interfaces/iflix-movies';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  panelOpenState: boolean = false;
  filteredMovies: Array<any> = [];

  allMovies$ = this.movieService.getMovies();
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src = 'https://placehold.jp/200x300.png';
  }

}
