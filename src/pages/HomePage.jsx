import Heading from "../components/Heading1"
import MovieGrid from "../components/MovieGrid"
import Topbar from "../components/Topbar"

function HomePage(){
    return(
        <>
        <div className=" absolute flex bg-slate-900 h-max ">
            <div className="w-screen">
                <div className="pl-6 pr-6 border-b-2 pb-4">    
                    <Topbar/>
                </div>
            <div className="grid grid-col-1 justify-items-center lg:ml-10 mt-10">
                <div className="">
                    <Heading/>
                </div> 
                <div className="mt-10">   
                    <MovieGrid/>
                </div>
            </div>
            </div>
        </div>    
        </>
    )
}

export default HomePage