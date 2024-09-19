
export type Genre ={
    id:number;
    name:string;
}

export type Movie = {
    backdrop_path:string;
    title?:string;
    vote_average?:number;
    overview?:string;
    id: number;
    genres:Genre[];
    release_date?:string;
    runtime:string;
    videoKey?:string,
    name?:string;
    poster_path?:string;
    type?:string;
}

