import { atom, selector } from "recoil";

export const movieState = atom({
    key:"MovieState",
    default:[]
});


export const moviesHome = selector({
    key:"MoviesHome",
    get: ({get})=>{
        const allMovies = get(movieState);
        const filter = get(searchState).toLowerCase(); 
        return allMovies.filter(movie => movie.Title.toLowerCase().includes(filter));
    }
})

export const searchState = atom({
    key:"Search",
    default:""
});

export const moviePage = atom({
    key: "MoviesPage",
    default:{}
})

export const wishlist = atom({
    key: "wishlist",
    default: (() => {
        try {
            const item = localStorage.getItem("wishlist");
            return item ? JSON.parse(item) : [];
        } catch {
            return [];
        }
    })()
});

export const count = selector({
    key:"count",
    get: ({get})=>{
        const list = get(wishlist);
        return list.length;
    }
})

export const user = atom({
    key: "user",
    default:{
        name:"",
        email:"",
        password:""
    }
})