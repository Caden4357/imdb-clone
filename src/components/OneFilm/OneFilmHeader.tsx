import imdbLogo from '../../assets/imdb-logo.png'
type HeaderProps = {
    title: string
    runtime?: number
    vote_average: number
}

export default function OneFilmHeader({title, runtime, vote_average}: HeaderProps) {
    return (
        <>
            <h1 className='text-4xl mb-4 dark:text-white'>{title}</h1>
            {
                runtime && runtime > 0 &&
                <p className='dark:text-white'>Runtime: {runtime} Min</p>
            }
            <p className='dark:text-white flex items-center gap-2'><img src={imdbLogo} alt="IMDB Rating logo" className='w-12' /> {vote_average.toFixed(1)}</p>
        </>
    )
}
