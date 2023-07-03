import LeftSide from './LeftSide'
import RightSide from './RightSide'
import SearchForm from './SearchForm'
import './nav.css'
export default function Nav() {
    return (
        <nav className='bg-gray-300 dark:bg-slate-900 flex items-center justify-between p-5 border-b-black dark:border-b-white'>
            <LeftSide/>
            <SearchForm/>
            <RightSide/>
        </nav>
    )
}
