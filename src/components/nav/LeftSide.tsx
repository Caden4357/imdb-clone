import { Link } from 'react-router-dom'
import mainLogo from '../../assets/main-logo.png'
export default function LeftSide() {
    return (
        <div className='w-2/4 flex items-center justify-between'>
            <img className='w-16' src={mainLogo} alt="" />
            <h1 className='text-4xl dark:text-white'>Movie Picker </h1>
            <Link to="/" className='dark:text-white'>Movies |</Link>
            <Link to="/tvshows" className='dark:text-white'>TV Shows |</Link>
            <Link to="#" className='dark:text-white'>Box Office Hits |</Link>
            <Link to="#" className='dark:text-white'>Top 100 All Time</Link>
        </div>
    )
}
