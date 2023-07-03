import { CastType } from "./CastType";
export type TvShowType = {
    backdrop_path: string,
    first_air_date: string,
    genre_ids: number[],
    id: number,
    name: string,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number,
    runtime?: number,
    trailerId?: string,
    cast?:CastType[],
    streamingInfo?: {
        link: string,
        flatrate: [],
        rent: [],
        buy: []
    }
}
