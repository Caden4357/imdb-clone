import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../../context/MovieProvider';
import searchMovies from '../../lib/SearchMovies';
export default function SearchForm() {
    const navigate = useNavigate()
    const { setMovies } = useContext(MovieContext)
    const [search, setSearch] = useState('')

    const searchMovie = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        async function getMovies() {
            const searchedMovies = await searchMovies(search)
            setMovies(searchedMovies.results)
            setSearch('')
            navigate('/search')
        }
        getMovies()
    }

    return (
        <div className='w-96'>
            <form className='flex w-full' onSubmit={searchMovie}>
                <input type="text" placeholder='Search for a movie' className='w-full border-2 border-black border-r-0 dark:text-black dark:border-2 dark:border-white' onChange={(e) => setSearch(e.target.value)} value={search} />
                <button className='p-1 border-2 border-black border-l-0 dark:text-white dark:border-2 dark:border-white'>Search</button>
            </form>
        </div>
    )
}

