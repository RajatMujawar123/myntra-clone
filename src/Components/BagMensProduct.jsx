import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import style from "../Style/mensProduct.moudle.css"
import Pagination from './Pagination'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import MensSingleProductCard from './MensSingleProductCard'

const BagMensProduct=({image,name,price,title,id})=>{
  let  navigate=useNavigate();
  const[data,setData]=useState([])
  const[page,setpage]=useState(1)
  const[pid,setpid]=useState([])
  const  fetchData =(page) =>{
    axios.get(`http://localhost:8000/Mensproducts?_limit=8&_page=${page}`)
    .then((res)=>{
        console.log(res.data)
        setData(res.data)
      
        
    })
  }
        useEffect(()=>{
           fetchData(page)
        },[page])

      
        

  return(
    <div>
    <div style={{border:"1px solid transparent",width:"99%",height:"auto ",display:'flex',marginTop:"30px",cursor:"pointer"}}>
      <div style={{border:"1px solid transparent"}}>
        
          

        


        



        



        


      </div>







      <div  style={{border:"1px solid transparent",width:"78%",display:"grid",gridTemplateColumns:"25% 25% 25% 25%",padding:'2rem',gap:'15px'}}>
      {data.map((el)=>(
        <MensSingleProductCard key={el.id}
          image={el.image}
          title={el.title}
          name={el.name}
          price={el.price}
          id={el.id}
          
          />
          
          

        ))}
        
      </div>
      
        
    </div>
    
    
    </div>
  )
}
export default BagMensProduct