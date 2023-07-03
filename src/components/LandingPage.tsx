import { useContext, useEffect } from "react"
import { MovieContext } from "../context/MovieProvider"
import { Movie } from "../types/MovieType"
import getPopularMovies from "../lib/GetPopularMovies"
import HomepageFilm from "./HomepageFilm"
import HomepageFilmContainer from "./HomepageFilmContainer"
import { useLocation } from "react-router-dom"
import getPopularTvSeries from '../lib/GetPopularTvSeries'
import { TvShowType } from "../types/TvShowType"
import { TvShowContext } from "../context/TvShowProvider"
import Loading from "./Loading"


export default function LandingPage() {
    const { movies, setMovies } = useContext(MovieContext);
    const { tvShows, setTvShows } = useContext(TvShowContext);
    const location = useLocation()
    useEffect(() => {
        if(location.pathname === '/'){
            async function getMovies() {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            getMovies()
    }
        else if (location.pathname === '/tvshows') {
            async function getTvShows() {
                const popularTvSeries = await getPopularTvSeries()
                console.log('SHOWS', popularTvSeries);
                setTvShows(popularTvSeries.results)
            }
            getTvShows()
    }
    }, [location.pathname])


    if(location.pathname === '/tvshows' && tvShows && Array.isArray(tvShows)){
        const tvShowsComponents:JSX.Element[] = tvShows.map((tvshow:TvShowType) => {
            return (
                <HomepageFilm 
                    key={tvshow.id} 
                    id={tvshow.id} 
                    title={tvshow.name} 
                    poster_path={tvshow.poster_path} 
                    mediaType='tvshow'
                />
            )
        })
        return (
            <HomepageFilmContainer>
                {tvShowsComponents}
            </HomepageFilmContainer>
        )
    }
    else if (location.pathname === '/' && movies && Array.isArray(movies)){
        const moveisComponents:JSX.Element[] = movies.map((movie: Movie) => {
            return (
                <HomepageFilm 
                    key={movie.id} 
                    id={movie.id} 
                    title={movie.title} 
                    poster_path={movie.poster_path} 
                    mediaType={movie.media_type? movie.media_type: 'movie'} 
                />
            )
        }
        )
        return(
            <HomepageFilmContainer>
                {moveisComponents}
            </HomepageFilmContainer>
        )
    }
    else if(location.pathname === '/search' && movies && Array.isArray(movies)){
        const moveisComponents:JSX.Element[] = movies.map((movie: Movie) => {
            return (
                <HomepageFilm 
                    key={movie.id} 
                    id={movie.id} 
                    title={movie.title} 
                    poster_path={movie.poster_path} 
                    mediaType={movie.media_type? movie.media_type: 'movie'} 
                />
            )
        })
        return (
            <HomepageFilmContainer>
                {moveisComponents}
            </HomepageFilmContainer>
        )
    }
    else {
        return (
            <HomepageFilmContainer>
                <Loading/>
            </HomepageFilmContainer>
        )
    }
}
