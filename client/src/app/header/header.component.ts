import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, toArray, mergeAll, mergeMap, concatAll, tap, distinct} from 'rxjs/operators';
import { MovieService } from 'src/services/movies.service';
import { IflixMovies } from '../interfaces/iflix-movies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  movies: Array<any> = [];
  filteredMovies: Array<any> = [];
  genres$: Observable<string[]>;

  ngOnInit(): void {
    this.genres$ = this.movieService.getMovies().pipe(
      mergeMap(items => items),
      map(items => items.genres),
      concatAll(),
      distinct(),
      toArray()
    )

    // _genres$.subscribe(x => {
    //   console.log(x)
    // })
  }

  setGenre(_genre: string) {

    alert(_genre);
    this.filteredMovies = this.movies.filter((item: any) => {
      return item.genres.includes(_genre)
    })
  }

}
