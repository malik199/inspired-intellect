export interface Viewer {
    rating: number;
    numReviews: number;
    meter: number;
}

export interface Tomatoes {
    viewer: Viewer;
    dvd: Date;
    website: string;
    production: string;
    lastUpdated: Date;
}

export interface Award {
    wins: number;
    nominations: number;
    text: string;
}

export interface Imdb {
    rating: number;
    votes: number;
    id: number;
}

export interface IflixMovies {
    tomatoes: Tomatoes;
    genres: string[];
    cast: string[];
    languages: string[];
    directors: string[];
    countries: string[];
    _id: string;
    plot: string;
    fullplot: string;
    runtime: number;
    num_mflix_comments: number;
    poster: string;
    title: string;
    lastupdated: string;
    released: Date;
    writers: string[];
    awards: Award[];
    year: number;
    imdb: Imdb;
    type: string;
    lasupdated: Date;
}