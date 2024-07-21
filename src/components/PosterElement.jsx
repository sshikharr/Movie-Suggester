import { useRecoilValue } from "recoil";
import { moviePage } from "../store/store1";

function PosterElement({src, handleClick}){
    const movie = useRecoilValue(moviePage);
    
    return(
        <>
        <div>
            <div className=" flex flex-row">
                <img src={src}></img>
            </div>    
                <div className=" flex flex-row h-fit justify-center">
                    <div className="p-4">
                        <button className="text-white ml-4 rounded-full hover:bg-slate-50 w-12 h-12 hover:text-slate-900" 
                        onClick={handleClick}>+</button>
                    </div>
                    <div className=" flex flex-col justify-center">
                    <div className="text-white">Add To Wishlist</div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default PosterElement;