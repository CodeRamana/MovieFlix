import { useNavigate } from 'react-router';
import unknown from '../assets/unknown.png'
const MovieCard = ({movie}) => {
    const navigate = useNavigate()
    return (
        <div key={movie.imdbID} onClick={()=>navigate(`/${movie.imdbID}`)} className="flex flex-col gap-4 bg-white rounded-md border border-black p-5 max-w-[300px] items-start">
            <img  className="max-w-[200px] w-full" src={movie.Poster || unknown} alt={movie.Title} />
            <div className="flex flex-col items-start gap-1">
                <p className="text-black text-xl font-extrabold tracking-normal font-[poppins]">{movie.Title}</p>
                <p className="text-[#a3abb2] text-sm font-extrabold tracking-normal font-serif capitalize">{`${movie.Type} (${movie.Year})`}</p>
            </div>
        </div>
    );
}

export default MovieCard;