import { useNavigate } from "react-router-dom";

function Card1({src, name, genre}){
    const navigate = useNavigate();
    return(
        <> 
            <div className=" sm: w-fit shadow-2xl hover:-translate-y-2 ransition-transform duration-300 ease-in-out transform group-hover:translate-x-4 group-hover:translate-y-2" onClick={()=>{
                navigate("/Movie?src="+src);               
                }}>
                <div className=" h-auto">
                    <img className=" h-80" src={src} alt={name}></img>
                </div >
                <div className="mt-4 text-white">
                    {name}
                </div>
                <div className="mt-2 w-48 text-white text-wrap">
                    {genre}
                </div>
            </div>
        </>
    )
}

export default Card1;
