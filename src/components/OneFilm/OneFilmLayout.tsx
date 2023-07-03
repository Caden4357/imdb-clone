import React from 'react'


type Children = {
    children: React.ReactNode
}
export default function OneFilmLayout({children}: Children) {
    return (
        <div className='w-3/4 mx-auto p-2 border-x-2 border-black dark:border-x-2 dark:border-white'>
            {children}
        </div>
    )
}
