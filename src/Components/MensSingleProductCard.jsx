import { useState } from 'react';
import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';

import { AppContext } from "../Context/AppContextProvider"
function MensSingleProductCard({image,name,price,title,id}){
    const {ath , token,login,logout, }=useContext(AppContext)
    
   const [data,setData] = useState({
    image,name,price,title,id
   })
    let  navigate=useNavigate();
    
    const wishlist=()=>{
        if(ath){
            localStorage.setItem("items",JSON.stringify([data]))
        alert("Added WishesList")
        }
        else{
            alert('Please Login')
            navigate("/Profile")
        }
    }
    return(
        <div>
        <div onClick={()=>navigate(`/MensProducts/${id}`)}>
            
        <img src={image} alt="title"/>
        
        <h3>{name}</h3>
        <h4>{title}</h4>
        <h4>Rs.{price}</h4>
        </div>
        <button onClick={wishlist} style={{width:"130px",}}>WishList</button>
        </div>
    )
}
export default MensSingleProductCard