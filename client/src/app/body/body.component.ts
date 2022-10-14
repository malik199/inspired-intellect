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
  filteredMovies: Observable<IflixMovies[]>;
  allMovies$: Observable<IflixMovies[] | null>;

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.filteredMovies = this.movieService.getFilteredMovies()
  }

  handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src = 'https://placehold.jp/200x300.png';
  }

}
