import {useState, createContext, ReactNode} from 'react'

import { Movie } from '../types/MovieType'
type MovieContextType = {
    movies: Movie[] | Movie,
    setMovies: (movies: Movie[] | Movie) => void 
}
export const MovieContext = createContext<MovieContextType>({
    movies: [] || {},
    setMovies: () => {}
})

type ChildrenType = {
    children?: ReactNode | ReactNode[]
}

export const MovieProvider = ({children}: ChildrenType): JSX.Element => {
    const [movies, setMovies] = useState<Movie[] | Movie>([] || {})




    return (
        <MovieContext.Provider value={{movies, setMovies}}>
            {children}
        </MovieContext.Provider>
    )
}