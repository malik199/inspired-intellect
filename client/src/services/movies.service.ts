import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IflixMovies } from 'src/app/interfaces/iflix-movies';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  oneMovie = [{
    tomatoes: {
      viewer: {
        rating: 2.7,
        numReviews: 64,
        meter: 18
      },
      dvd: "2000-08-15T00:00:00.000Z",
      website: "http://www.milestonefilms.com/",
      production: "World Film Corporation",
      lastUpdated: "2015-08-18T19:21:12.000Z"
    },
    genres: [
      "Drama",
      "History"
    ],
    cast: [
      "Stanley Hunt",
      "Sarah Constance Smith Hunt",
      "Mrs. George Walkus",
      "Paddy 'Malid"
    ],
    languages: [
      "English"
    ],
    directors: [
      "Edward S. Curtis"
    ],
    countries: [
      "USA"
    ],
    _id: "573a1390f29313caabcd516c",
    plot: "Original advertising for the film describes it as a drama of primitive life on the shores of the North Pacific...",
    fullplot: "Original advertising for the film describes it as a drama of primitive life on the shores of the North Pacific...",
    runtime: 65,
    num_mflix_comments: 1,
    poster: "https://m.media-amazon.com/images/M/MV5BMjE3MjAyNzM5NV5BMl5BanBnXkFtZTgwMjA5OTg5NjE@._V1_SY1000_SX677_AL_.jpg",
    title: "In the Land of the Head Hunters",
    lastupdated: "2015-09-16 12:11:37.770000000",
    released: "1914-12-07T00:00:00.000Z",
    writers: [
      "Edward S. Curtis (story)"
    ],
    awards: [
      {
        wins: 1,
        nominations: 0,
        text: "1 win."
      }
    ],
    year: 1914,
    imdb: {
      rating: 5.8,
      votes: 223,
      id: 4150
    },
    type: "movie",
    lasupdated: "2020-03-19T23:35:17.315Z"
  }]
  private _movieBehaviorSubject: BehaviorSubject<IflixMovies[]> = new BehaviorSubject<IflixMovies[]>(this.oneMovie as unknown as IflixMovies[]);
  private _movieObserverable = this._movieBehaviorSubject.asObservable();

  private url = 'http://localhost:3000/api/movies';
  //$myMovies: Observable<IflixMovies[]>;
  public $filteredMovies: Observable<IflixMovies[]>;

  constructor(private http: HttpClient) { }

  fetchMovies(): Observable<IflixMovies[]> {
    this._movieObserverable = this.http.get<IflixMovies[]>(this.url);
    return this._movieObserverable
  }

  getFilteredMovies(): Observable<IflixMovies[]> {
    return this._movieBehaviorSubject;
  }

  setfilterMovies(genre: any): any {
    const _movies$: Observable<IflixMovies[]> = this._movieObserverable.pipe(
      map(items => items.filter(mov => {
        return mov.genres.includes(genre);
      })),
    )
    return this._movieBehaviorSubject.next(_movies$ as any)
  }

  // filterMovies(genre: string){
  //   const _movies$: Observable<IflixMovies[]> = this._movieObserverable.pipe(
  //     map(items => items.filter(mov => {
  //       return mov.genres.includes(genre);
  //     })),
  //   )
  
  //   return this._movieBehaviorSubject.next(_movies$ as any) 

  // }

}