
type TrailerProps = {
    trailerId?: string
}
export default function Trailer({ trailerId }: TrailerProps) {
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
}
