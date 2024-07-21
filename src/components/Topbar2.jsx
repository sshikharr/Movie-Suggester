import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { count } from "../store/store1";

function Topbar2(){
    const navigate = useNavigate();
    const notificationCount = useRecoilValue(count);
    return (
        <>
        <div className="flex w-full justify-between pt-4">
            <div className=" text-white text-xl lg:pt-3 lg:text-3xl font-bold" onClick={()=>navigate("/home")}>
                Movie Suggester
            </div>
            
                <div className=" pt-1 mr-4 w-1/2 h-12">
                    
                </div>
            <div className="pt-3">
                
                <div className=" bg-slate-300 rounded-full w-9 h-9" onClick={()=>navigate('/wishlist')}>
                        <div className="flex justify-center align-bottom pt-1.5">
                            U
                        </div>
            </div>    
                
                </div>
            
        </div>
        </>
    )
}

export default Topbar2;