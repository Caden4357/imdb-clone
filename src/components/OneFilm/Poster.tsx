import React from 'react'

type PosterProps = {
    poster_path: string
}

export default function Poster({ poster_path }: PosterProps) {
    return (
        <img className='h-96 shadow-sm shadow-gray-500/50' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="Movie Poster" />
    )
}
