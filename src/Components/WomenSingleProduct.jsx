import style from "../Style/SingleProduct.module.css"
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {Navigate, useParams} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import {useContext} from 'react';
import { AppContext } from "../Context/AppContextProvider"

const WomenSingleproducts=()=>{
  const {ath , token,login,logout, }=useContext(AppContext)
    const [data,setData]=useState([])
    const[item,setItem]=useState([])

    const {id} = useParams()
    console.log(id)

    const bag=()=>{
      if(ath){
        localStorage.setItem('items', JSON.stringify([data]))
      alert("Added to  Cart")
      }
      else{
        alert('Please Login')
        Navigate("/Profile")
      }
      
    }

     useEffect(()=>{
        axios.get(`http://localhost:8000/women/${id}`)
        .then((res)=>{
          console.log(res.data)
          setData(res.data);
          setItem(res.data)
          
         
        })
      },[]);

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
          <button onClick={bag} id={style.wishlist}>Add To Bag</button>
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
export default WomenSingleproducts;