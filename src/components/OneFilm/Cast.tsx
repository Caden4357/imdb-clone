import React from 'react'
import { CastType } from '../../types/CastType'
type CastProps = {
    cast: CastType[]
}

export default function Cast({ cast }: CastProps) {
    return (
        <div className='w-2/4 mx-auto '>
            <h2 className='p-4 text-2xl text-center dark:text-white'>Staring:</h2>
            {
                cast && cast.splice(10) &&
                <div className='flex flex-wrap w-full items-center dark:text-white'>
                    {cast.map((actor: CastType) => {
                        return (
                            <div className='w-1/5 m-4'>
                                <img src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt="Actors headshot" className='w-24 mx-auto' />
                                <p className='text-center dark:text-white' key={actor.cast_id}>{actor.name}</p>
                            </div>
                        )
                    })}
                </div>
            }

        </div>
    )
}
