import { useSearchParams } from 'react-router-dom';
import Card2 from '../components/Card2';
import PosterElement from '../components/PosterElement'
import Topbar2 from '../components/Topbar2';
import Card3 from '../components/Card3';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { moviePage, moviesHome, movieState, wishlist } from '../store/store1';

function Movie(){
    const [moviePage1, setMoviePage] = useRecoilState(moviePage);
    const nonParsedallMovies = window.localStorage.getItem("Movies");
    const allMovies = JSON.parse(nonParsedallMovies);
    const [params] = useSearchParams();
    const src = [...params][0][1];
    const [wish, setWish] = useRecoilState(wishlist)
    useEffect(()=>{
        const movie = allMovies.find((movie)=>{
            return (movie.Poster === src);
        })
        setMoviePage(movie)
    },[])
    const handleClick = ()=>{
        console.log(wish);
        if(wish.length==0){
            setWish([moviePage1]);
        }else{
            const present = wish.some((movie)=>{
                return movie.Title === moviePage1.Title               
            })
            console.log(present);
            if(!present){
                setWish([...wish, moviePage1]);
            }else{
                alert("Movie already in wishlist");
            }
        }
        
    }
    useEffect(()=>{
        localStorage.setItem("wishlist", JSON.stringify(wish));
    }, [wish])
    return(
        <>
        <div className="pl-6 pr-6 border-b-2 pb-4 mb-8">    
            <Topbar2/>
        </div>
        <div className=' grid grid-cols-1 justify-items-center gap-y-8'>
            <div>
            <PosterElement src={src} handleClick={handleClick}/>
            </div>
            <div className='flex flex-col w-2/4'>
            <Card2/>
            </div>
            <div className=' w-2/4'>
                <Card3/>
            </div>
        </div>
        </>
    )
}

export default Movie;