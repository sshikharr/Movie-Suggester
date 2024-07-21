import { useRecoilState, useRecoilValue} from "recoil";
import { count, searchState, user } from "../store/store1";
import { useNavigate } from "react-router-dom";

function Topbar(){
    const navigate = useNavigate();
    const [search, setSearch] = useRecoilState(searchState);
    const notificationCount = useRecoilValue(count);
    const [storedUser, setStoredUser] = useRecoilState(user)
    return (
        <>
        <div className="flex w-full justify-between pt-4">
            <div className=" text-white text-xl lg:pt-3 lg:text-3xl font-bold" onClick={()=>navigate("/home")}>
                Movie Suggester
            </div>
            
                <div className=" pt-1 mr-4 w-1/2 h-12 ml-2">
                    <input type="text" placeholder="Search Movie..." className="w-full h-full pl-4"
                     value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                </div>
            <div className=" flex flex-row pt-3">
                
                <div className=" bg-slate-300 rounded-full w-9 h-9" onClick={()=>navigate("/wishlist")}>
                        <div className="flex justify-center align-bottom pt-1.5">
                            U
                        </div>
            </div>      
            <div className="bg-red-600 rounded-full h-4 w-4 text-xs text-white flex flex-row justify-center" >
                <div>
                        {notificationCount}
                </div>
                </div>    
                </div>
            <div className="text-white flex flex-cols justify-center ml-4">
                <button className="" onClick={()=>{
                    localStorage.removeItem("storedUser");
                    setStoredUser(null);
                    navigate('/signin')
                }}>Logout</button>
            </div>
        </div>
        </>
    )
}

export default Topbar;