import { createContext,useState } from "react";
import {useNavigate} from "react-router-dom"


export const AppContext=createContext();    

export const AppContextProvider=({children})=>{
    const [token, setToken] = useState("");
    const [ath, setAth] = useState(false);
    

    const login=(token)=>{
        setAth(true)
        setToken(token)
    }
    const logout=()=>{
       if(!ath){
       
        alert("Please Login")
        
       }
       else{
        alert("successfully logout")
       }
        setAth(false)
        setToken("")
    }


    return(
        <AppContext.Provider value={{ ath , token,login,logout   }}>
            {children}
        </AppContext.Provider>
    )
}