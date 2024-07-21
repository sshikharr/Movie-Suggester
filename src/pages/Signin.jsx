import { useNavigate } from "react-router-dom";
import Topbar2 from "../components/Topbar2";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { user } from "../store/store1";
import Topbar3 from "../components/Topbar3";

function Signin(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useRecoilState(user);
    const handleClick = ()=>{
        const storedUser = JSON.parse(localStorage.getItem("storedUser"));
        if(storedUser && storedUser.email == email && storedUser.password == password){
            navigate("/home")
            setNewUser(storedUser);
        }else{
            alert("Invalid Credentials");
        }
    }
    return(
        <>
        <Topbar3/>
        <div className="h-screen flex flex-col justify-center">
            <div className="flex flex-row justify-center">
                <div className="grid grid-cols-1 gap-y-10 p-10 border-2 shadow-2xl">
                <div className="text-white text-center text-3xl font-bold">
                    Signin
                </div>
                <div>
                    <input type="text" placeholder="email" className="pl-2 h-10" onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div>
                    <input type="text" placeholder="password" className="pl-2 h-10" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div className="text-black text-center">
                    <button className="bg-slate-200 p-2 w-20" onClick={handleClick}>Login</button>
                </div>
                </div>
            </div>
            <div className="flex flex-row justify-center mt-4 text-white">
                Haven't registered? <button className="ml-3 underline" onClick={()=>{
                    navigate("/signup")
                }}>Signup</button>
            </div>
        </div>
        </>
    )
}

export default Signin;