import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { MovieContext } from "../context/MovieProvider"
import { TvShowContext } from "../context/TvShowProvider"
import getPopularMovies from "../lib/GetPopularMovies"
import getPopularTvSeries from '../lib/GetPopularTvSeries'
import getInTheaters from "../lib/InTheaters"
import getTop100AllTime from "../lib/Top100AllTime"
import HomepageFilmContainer from "./HomepageFilmContainer"
import Loading from "./Loading"
import mapMoviesToComponents from "./mapMoviesToComponents"
import mapTvShowsToComponents from "./mapTvShowsToComponents"

export default function LandingPage() {
    const { movies, setMovies } = useContext(MovieContext);
    const { tvShows, setTvShows } = useContext(TvShowContext);
    const location = useLocation()
    useEffect(() => {
        async function fetchData() {
            if (location.pathname === "/") {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } else if (location.pathname === "/tvshows") {
                const popularTvSeries = await getPopularTvSeries();
                setTvShows(popularTvSeries.results);
            } else if (location.pathname === "/theaters") {
                const moviesInTheaters = await getInTheaters();
                setMovies(moviesInTheaters);
            } else if (location.pathname === "/topAllTime") {
                const top100AllTime = await getTop100AllTime();
                setMovies(top100AllTime);
            }
        }
        fetchData();
    }, [location.pathname, setMovies, setTvShows])


    if (location.pathname === '/tvshows' && tvShows && Array.isArray(tvShows)) {
        const tvShowComponents = mapTvShowsToComponents(tvShows);
        return <HomepageFilmContainer>{tvShowComponents}</HomepageFilmContainer>;
    }
    else if (location.pathname === '/' && movies && Array.isArray(movies)) {
        const movieComponents = mapMoviesToComponents(movies);
        return <HomepageFilmContainer>{movieComponents}</HomepageFilmContainer>;
    }
    else if (location.pathname === '/search' && movies && Array.isArray(movies)) {
        const movieComponents = mapMoviesToComponents(movies);
        return <HomepageFilmContainer>{movieComponents}</HomepageFilmContainer>;
    }
    else if (location.pathname === '/theaters' && movies && Array.isArray(movies)) {
        const movieComponents = mapMoviesToComponents(movies);
        return <HomepageFilmContainer>{movieComponents}</HomepageFilmContainer>;
    }
    else if (location.pathname === '/topAllTime' && movies && Array.isArray(movies)) {
        const movieComponents = mapMoviesToComponents(movies);
        return <HomepageFilmContainer>{movieComponents}</HomepageFilmContainer>;
    }
    else {
        return (
            <HomepageFilmContainer>
                <Loading />
            </HomepageFilmContainer>
        )
    }
}
