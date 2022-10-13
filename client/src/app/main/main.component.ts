import { Component, OnInit } from '@angular/core';
//import { movie_mocks } from 'src/assets/movie_mocks';
import { MovieService } from 'src/services/movies.service';

interface IflixMovies {
  tomatoes: any;
  genres: string[];
  cast: string[];
  languages: string[];
  directors: string[];
  countries: string[];
  _id: string;
  plot: string;
  runtime: number;
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  released: string;
  writers: string[];
  awards: any;
  lastupdated: string;
  year: number;
  imdb: any;
  type: string;
  lasupdated: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private service:MovieService) {}

  movies: IflixMovies[] = [];
  filteredMovies: IflixMovies[] = [];
  genres: any = [];
  panelOpenState:boolean = false;

  ngOnInit(): void {

    this.service.getPosts()
        .subscribe(response => {
          this.movies = response as IflixMovies[];
          this.filteredMovies = this.movies;
          this.genres = [...new Set(this.movies.map((item: { genres: any; }) => item.genres).flat())]
        });
    
  }

  setGenre(_genre: string) {
    this.filteredMovies = this.movies.filter((item: any) => {
      return item.genres.includes(_genre)
    })
  }

  handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src='https://placehold.jp/200x300.png';
  }

}