import  HomepageFilm  from "./HomepageFilm";
import {Movie} from "../types/MovieType";
// type FilmProps = {
//   id: number,
//   title: string,
//   poster_path: string,
//   mediaType: string
// }
function mapMoviesToComponents(movies: Movie[]) {
    return movies.map((movie) => (
      <HomepageFilm
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        mediaType={movie.media_type ? movie.media_type : "movie"}
      />
    ));
  }

export default mapMoviesToComponents;