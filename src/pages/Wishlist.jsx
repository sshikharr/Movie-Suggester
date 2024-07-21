import { useRecoilValue } from "recoil";
import Card4 from "../components/Card4";
import Topbar2 from "../components/Topbar2";
import { wishlist } from "../store/store1";

function WishList(){
    const moviesList = useRecoilValue(wishlist);
    if(moviesList.length === 0){
        return (<>
        <div className="pl-6 pr-6 border-b-2 pb-4 mb-8">
        <Topbar2/>
        </div>
        <div className="text-white text-center mt-10 font-bold text-3xl">Add movies to you wishlist...</div>
        </>)
    }
    return(
        <>
        <div className="pl-6 pr-6 border-b-2 pb-4 mb-8">
        <Topbar2/>
        </div>
        <div className="pl-8 pt-4 pr-8 gird grid-cols-1 gap-y-6">
            {moviesList.map((movie, index)=>{
                return <Card4 key={index} Poster={movie.Poster} Title={movie.Title} Runtime={movie.Runtime} Genre={movie.Genre} Language={movie.Language}/>
            })}
        </div>    
        </>
    )
}

export default WishList;