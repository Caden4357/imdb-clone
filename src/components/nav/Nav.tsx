import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import './nav.css'
import SearchForm from './SearchForm'
export default function Nav() {
    return (
        <nav className='bg-gray-300 dark:bg-slate-900 flex items-center justify-between p-5 border-b-black dark:border-b-white'>
            <LeftSide/>
            <SearchForm/>
            <RightSide/>
        </nav>
    )
}
