import HomepageFilm from "./HomepageFilm"
import { TvShowType } from "../types/TvShowType"



export default function mapTvShowsComponent(tvShows: TvShowType[]) {
    return tvShows.map((tvShow) => (
        <HomepageFilm
          key={tvShow.id}
          id={tvShow.id}
          title={tvShow.name}
          poster_path={tvShow.poster_path}
          mediaType='tvshow'
        />
      ));
}
