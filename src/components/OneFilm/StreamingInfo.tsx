import { Link } from 'react-router-dom'
type StreamingInfoProps = {
    rent: []
    buy: []
    link: string
}

export default function StreamingInfo({ rent}: StreamingInfoProps) {
    return (
        <div className='w-1/4 flex flex-wrap'>
            {
                rent.map((rent: any) => {
                    return (
                        // <Link className='bg-slate-100 dark:bg-inherit rounded-xl shadow-sm shadow-gray-500/50 w-1/4 p-2 m-2' to={`https://${rent.provider_name.replace(/\s+/g, '')}.com`} target='_blank'>
                        <div className='bg-slate-100 dark:bg-inherit rounded-xl shadow-sm shadow-gray-500/50 w-1/4 p-2 m-2'>
                            <p className='dark:text-white'>{rent.provider_name}</p>
                            <p className='dark:text-white'>{rent.rent}</p>
                        </div>
                        // </Link>
                    )
                }
                )
            }
        </div>
    )
}
