import { Link } from 'react-router-dom'
import mainLogo from '../../assets/main-logo.png'
export default function LeftSide() {
    return (
        <div className='w-2/4 flex items-center justify-between'>
            <img className='w-16' src={mainLogo} alt="" />
            <h1 className='text-4xl dark:text-white'>Movie Picker </h1>
            <Link to="/" className='dark:text-white mr-2'>Movies</Link><span className='text-white'>|</span>
            <Link to="/tvshows" className='dark:text-white'>TV Shows</Link><span className='text-white'>|</span>
            <Link to="/theaters" className='dark:text-white'>In Theaters</Link><span className='text-white'>|</span>
            <Link to="/topAllTime" className='dark:text-white'>Top Rated Films & TV</Link>
        </div>
    )
}
