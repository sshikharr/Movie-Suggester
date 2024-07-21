import { useRecoilValue } from "recoil";
import { moviePage } from "../store/store1";

function Card2(){
    const movieDetail = useRecoilValue(moviePage);
    let imdbRating = "N/A";
    if(movieDetail.imdbRating){
        imdbRating = movieDetail.imdbRating;
    }
    const rottenRatingArr = movieDetail.Ratings;
    let rottenRating = "N/A";
    if(Array.isArray(rottenRatingArr) && rottenRatingArr.length>1){
        rottenRating = rottenRatingArr[1].Value;
    }
    return(
        <>
            <div className="w-full flex flex-row">
                <div className="flex flex-row justify-center">
                    <div className=" w-1/6 flex flex-col justify-center">
                    
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png" className=""></img>
                    
                    </div>
                    <div className="text-white ml-2 flex flex-col justify-center">
                     <div>
                             : {imdbRating}
                     </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className=" w-1/6 flex flex-col justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rotten_Tomatoes_logo.svg/1200px-Rotten_Tomatoes_logo.svg.png" className="w-max"></img>
                    </div>
                    <div className="text-white ml-2 flex flex-col justify-center">
                        <div>
                             : {rottenRating}
                     </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Card2;