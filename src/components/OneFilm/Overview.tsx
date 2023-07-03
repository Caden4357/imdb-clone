
type OverviewProps = {
    overview: string
}

export default function Overview({ overview }: OverviewProps) {
    return (
        <div className='bg-slate-100 dark:bg-inherit rounded-xl shadow-sm shadow-gray-500/50 w-2/4 h-fit p-4'>
            <h3 className='dark:text-white text-3xl'>Overview:</h3>
            <p className='dark:text-white'>{overview}</p>
        </div>
    )
}
