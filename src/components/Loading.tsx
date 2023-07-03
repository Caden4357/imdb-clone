import React from 'react'
import HomepageFilmContainer from './HomepageFilmContainer'

export default function Loading() {
    console.log('Loading');
    return (
        <div className="h-screen">
            <h1 className='dark:text-white text-8xl text-center'>Loading...</h1>
        </div>
    )
}
