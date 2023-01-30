import style from "../Style/SingleProduct.module.css"
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../Context/AppContextProvider";
import {useContext} from 'react';


const SingleProduct=()=>{
  const {ath , token,login,logout, }=useContext(AppContext)
  let  navigate=useNavigate();
    const [data,setData]=useState([])

    const {id} = useParams()
    console.log(id)

    

     useEffect(()=>{
        axios.get(`http://localhost:8000/Mensproducts/${id}`)
        .then((res)=>{
          console.log(res.data)
          setData(res.data)
         
        })
      },[]);

      const wishlist=()=>{
        if(ath){
          localStorage.setItem("items",JSON.stringify([data]))
        alert("Added Cart")
        }
        else{
            alert('Please Login')
            navigate("/Profile")
        }
        
    }
    return(
        <div id={style.main}>
        
       <div className={style.big}>
        <img src={data.image}/>
        </div>
        <div className={style.big}>
        <img src={data.image}/>
        </div>
        <div id={style.detaii}>
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <h1>Rs.{data.price}</h1>
        <h3>Select Size(UK Size)</h3>
        
        <button className={style.btn}>6</button>
        <button className={style.btn} >7</button>
        <button className={style.btn}>8</button>
        <button className={style.btn}>9</button>
        <button className={style.btn}>10</button>
        <div >
          <button  onClick={wishlist} id={style.wishlist}>Add To Bag</button>
          </div>
          <div>
            <p>100% Original Products</p>
            <p>Pay on delivery might be available</p>
            <p>Easy 30 days returns and exchanges</p>
            <p>Try & Buy might be available</p>
            <h3>BEST OFFERS</h3>
            <p>Applicable on: Orders above Rs. 799 (only on first purchase)</p>
            <p>Coupon code: MYNTRA200</p>
            <p>Coupon Discount: Rs. 200 off (check cart for final savings)</p>
            <h3>EMI option available</h3>
            <p>EMI starting from Rs.98/month</p>
          </div>
        </div>
        
        <div>
        
        </div>
      
        </div>
    )
}
export default SingleProduct;