
type TrailerProps = {
    trailerId?: string
}
export default function Trailer({ trailerId }: TrailerProps) {
console.log(trailerId);
    if(trailerId){
        return (
            <iframe
                className='h-96 shadow-sm shadow-gray-500/50'
                width="1060"
                src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
                // make autoplay work
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
        )

    } else{
    return (
        <div className='h-96 shadow-sm shadow-gray-500/50'>
            <p className='text-center text-2xl text-white'>No trailer available</p>
        </div>
    )
    }

        
}
