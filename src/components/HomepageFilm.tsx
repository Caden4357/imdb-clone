import { Link } from "react-router-dom"
type FilmProps = {
    id: number,
    title: string,
    poster_path: string,
    mediaType: string
}
export default function HomepageFilm({ id, title, poster_path, mediaType }: FilmProps) {

    return (
        <div className='w-1/6 p-8 mb-16'>
            <div className="shadow-lg shadow-cyan-500/50 w-100 h-96">

                <Link to={mediaType === 'movie'? `/movie/${id}`: `/tvshow/${id}`}>
                    <img className='w-full mb-4' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
                </Link>
                <h1 className='text-center text-2xl dark:text-white'>{title}</h1>
            </div>
        </div>
    )
}
