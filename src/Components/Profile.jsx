
import React,{useContext,useState} from 'react'
import {useNavigate} from "react-router-dom"
    
import axios from "axios"
import { AppContext } from "../Context/AppContextProvider"


const Profile=()=>{
    const navigate=useNavigate();
    const [email,setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("");
   
const {ath , token,login,logout, }=useContext(AppContext)

const hLogin=()=>{
    if(!email || !password){
        alert("Type all the fields");
        return;
    }
    const payload = {
        email, 
        password
    }
    axios.post(`https://reqres.in/api/login`, payload)              //"email": "eve.holt@reqres.in", "password": "cityslicka"
    .then((res)=>{
        alert("Welcome to Myntra");
        login(res.data.token)
        
        navigate("/")
       
    })

}




const hLogout=()=>{
    logout()
}
    return(
        <div style={{backgroundColor:"#fdeef0"}}>
        <div>
            <img style={{width:"450px",marginTop:"50px"}} src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/98b25e23-649a-40e2-8d86-f9b97f441c791662403123928-offer-banner-300-600x240-code-_-MYNTRA200.jpg'/>
        <div style={{backgroundColor:"white",width:'430px',height:"300px",margin:"auto"}} className={login.container}>
        <br /><br />
        <input style={{width:"280px"}} placeholder='Email' type="text" value={email}  onChange={(e)=> setEmail(e.target.value)} />
        <br />
        <input style={{width:"280px"}} placeholder='password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <br/>
        <br/>
        <p style={{color:"#6e6d6b"}}>I agree to the <span style={{color:"#ff3f6c"}}>Terms of Use</span> & <span style={{color:"#ff3f6c"}}> Privacy policy</span></p>
        <button style={{width:"280px",height:"50px",borderRadius:"5px",backgroundColor:"#ff3f6c",color:"white",border:"none"}} onClick={hLogin}>Continue</button>
    </div>
    </div>
    </div>
    )
}
export default Profile;