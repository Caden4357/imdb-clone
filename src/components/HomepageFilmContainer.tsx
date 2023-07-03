

type Children = {
    children: React.ReactNode 
}

export default function HomepageFilmContainer({ children }: Children) {
    return (
        <div className='flex flex-wrap justify-center'>
            {children}
        </div>
    )
}
