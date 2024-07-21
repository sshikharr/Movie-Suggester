import { useRecoilState, useRecoilValue } from "recoil";
import { wishlist } from "../store/store1";

function Card4({Poster, Title, Runtime, Genre, Language}){
    const [list, setList] = useRecoilState(wishlist);
    const handleClick = ()=>{
        const updatedList = list.filter((movie)=>{
                return movie.Title !== Title               
            });
        setList(updatedList);
        localStorage.removeItem("wishlist", JSON.stringify(updatedList));
    }
    return (
        <>
        <div className="h-fit shadow-xl shadow-black flex flex-row justify-around py-5 hover:translate-y-2 duration-300 ease-in-out pr-2">
            <div className="">
            <img src={Poster} className="sm:h-48 h-28"></img>
            </div>
            <div className="flex flex-col justify-around text-white ml-2">
                <div className="md:font-bold md:text-3xl text-lg font-semibold">
                    {Title}
                </div>
                <div className="md:font-semibold md:text-xl">
                    Runtime: {Runtime}
                </div>
                <div className="md:font-medium md:text-lg">
                    Genre: {Genre}
                </div>
            </div>
            <div className="md:flex md:flex-col md:justify-center md:text-white hidden w-4/12">
                <div className="flex flex-row gap-2">
                    <div className="font-bold text-xl flex flex-col justify-center">
                        <div>
                            Languages:
                        </div>
                    </div>
                    <div className="font-medium text-xl flex flex-col justify-center break-words">
                        <div className="">
                         {Language}
                         </div>
                    </div>
                </div>
            </div>
            <div className="text-white " onClick={()=>handleClick()}>
                X
            </div>
        </div>
        </>
    )
}

export default Card4;