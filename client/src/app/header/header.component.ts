import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, toArray, mergeMap, concatAll, tap, distinct} from 'rxjs/operators';
import { MovieService } from 'src/services/movies.service';
import { IflixMovies } from '../interfaces/iflix-movies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(public movieService: MovieService) { }
  genres$: Observable<string[]>;

  ngOnInit(): void {
    this.genres$ = this.movieService.fetchMovies().pipe(
      mergeMap(items => items),
      map(items => items.genres),
      concatAll(),
      distinct(),
      toArray()
    )
  }

  setGenre(_genre: string) {
    //this.movieService.filterMovies(_genre);
    this.movieService.setfilterMovies(_genre);
  }

}
