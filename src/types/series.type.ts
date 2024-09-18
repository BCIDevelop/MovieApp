export type SeriesGenre ={
    id:number;
    name:string;
}

export type Series = {
    poster_path:string;
    name:string;
    id: number;
    genres:SeriesGenre[];
    release_date:string;
    runtime:string;
    actualSeason:string;
    actualEpisode:string;
}