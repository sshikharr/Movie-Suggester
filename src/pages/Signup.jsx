import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { user } from "../store/store1";
import { useState } from "react";
import Topbar3 from "../components/Topbar3";

function Signup(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useRecoilState(user);
    const handleClick = ()=>{
        const user = {name, email, password};
        localStorage.setItem("storedUser", JSON.stringify(user));
        setNewUser(user);
        navigate("/signin")
    }
    return(
        <>
        <Topbar3/>
        <div className="h-screen flex flex-col justify-center">
            <div className="flex flex-row justify-center">
                <div className="grid grid-cols-1 gap-y-10 p-10 border-2 shadow-2xl">
                <div className="text-white text-center text-3xl font-bold">
                    Signup
                </div>
                <div>
                    <input type="text" placeholder="name" className="pl-2 h-10" onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div>
                    <input type="text" placeholder="email" className="pl-2 h-10" onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div>
                    <input type="text" placeholder="Set password" className="pl-2 h-10" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div className="text-black text-center">
                    <button className="bg-slate-200 p-2 w-20" onClick={handleClick}>Signup</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup;