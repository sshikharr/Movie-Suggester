import { useRecoilValue } from "recoil"
import CardText from "./CardText"
import { moviePage } from "../store/store1"

function Card3(){
    const movieDetail = useRecoilValue(moviePage);
    return(
        <>
        <div className="w-full h-auto">
            <div className=" grid grid-cols-1 gap-y-4 justify-center">
                <CardText prop={"Title"} prop2={movieDetail.Title}/>
                <CardText prop={"Year"} prop2={movieDetail.Year}/>
                <CardText prop={"Rated"} prop2={movieDetail.Rated}/>
                <CardText prop={"Released"} prop2={movieDetail.Released}/>
                <CardText prop={"Runtime"} prop2={movieDetail.Runtime}/>
                <CardText prop={"Genre"} prop2={movieDetail.Genre}/>
                <CardText prop={"Director"} prop2={movieDetail.Director}/>
                <CardText prop={"Plot"} prop2={movieDetail.Plot}/>
            </div>    
        </div>
        </>
    )
}

export default Card3