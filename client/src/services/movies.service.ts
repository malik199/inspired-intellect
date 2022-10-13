import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IflixMovies } from 'src/app/interfaces/iflix-movies';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private url = 'http://localhost:3000/api/movies';
  $myMovies: Observable<IflixMovies[]>;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<IflixMovies[]> {
    this.$myMovies = this.http.get<IflixMovies[]>(this.url);
    return this.$myMovies;
  }

}