import {useState, createContext, ReactNode} from 'react'

import { TvShowType } from '../types/TvShowType'
type TvShowContextType = {
    tvShows: TvShowType[] | TvShowType,
    setTvShows: (tvShows: TvShowType[] | TvShowType) => void
}
export const TvShowContext = createContext<TvShowContextType>({
    tvShows: [] || {},
    setTvShows: () => {}
})

type ChildrenType = {
    children?: ReactNode | ReactNode[]
}

export const TvShowProvider = ({children}: ChildrenType): JSX.Element => {
    const [tvShows, setTvShows] = useState<TvShowType[] | TvShowType>([] || {})

    return (
        <TvShowContext.Provider value={{tvShows, setTvShows}}>
            {children}
        </TvShowContext.Provider>
    )
}
