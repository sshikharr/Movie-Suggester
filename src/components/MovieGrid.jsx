import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Card1 from "./Card1";
import { moviesHome, movieState, searchState } from "../store/store1";
import { Suspense, useEffect } from "react";
import axios from "axios";

function MovieGrid(){

    const [movies, setMovies] = useRecoilState(movieState);
    const movieToDisplay = useRecoilValue(moviesHome);
    useEffect(()=>{
        const fetchMovies = async ()=>{
            try{
                const res = await axios.get("https://64c3af5b620f470f9014abc97971528a.api.mockbin.io/")
                setMovies(res.data); 
            }
            catch(err){
                console.log("Movie fetching failed")
            }
        };
        fetchMovies();
    }, []);
    useEffect(()=>{
        localStorage.setItem("Movies", JSON.stringify(movies));
    }), [movies]
    return (
        <>
        <Suspense fallback={<div>Loading</div>}>
            <div className=" grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 xl:grid-cols-5">
                {movieToDisplay.map((x, index)=>{
                    return(<Card1 src={x.Poster} name={x.Title} genre={x.Genre} key={index}/>)
                })}
            </div>
        </Suspense>
        </>
    )
}

export default MovieGrid;

