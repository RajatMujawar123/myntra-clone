import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import style from "../Style/mensProduct.moudle.css"
import Pagination from './Pagination'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import MensSingleProductCard from './MensSingleProductCard'
import WomensingleCard from './WomensingleCard'

const WomenProducts=({image,name,price,title,id})=>{
  let  navigate=useNavigate();
  const[data,setData]=useState([])
  const[page,setpage]=useState(1)
  const[pid,setpid]=useState([])
  const  fetchData =(page) =>{
    axios.get(`http://localhost:8000/women?_limit=8&_page=${page}`)
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
      <div style={{border:"1px solid transparent",width:"20%"}}>
        <div style={{border:"1px solid transparent",width:"100%",height:"300px",textAlign:"left",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}>
          <p style={{textAlign:"left",fontWeight:'bold'}}>Category</p>
          
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Tshirt</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Shirt</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Jeans</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Jacket</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Sweatshirts</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Shorts</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Track Pants</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Sweaters</label><br/>
  
  

        </div>


        <div style={{border:"1px solid transparent",width:"100%",height:"140px",textAlign:"left"}}>
        <p style={{textAlign:"left",fontWeight:'bold'}}>Brands</p>
        <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>WROGN</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>WRONG ACTIVE</label><br/>
        </div>


        <div style={{border:"1px solid transparent",width:"100%",height:"180px",textAlign:"left"}} >

        <p style={{textAlign:"left",fontWeight:'bold'}}>Price</p>
        <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Rs. 319 to Rs. 1084</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Rs. 1084 to Rs. 1849</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Rs. 1849 to Rs. 2614</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Rs. 2614 to Rs. 4118</label>
        </div>



        <div style={{border:"1px solid transparent",width:"100%",height:"200px",textAlign:"left"}}>
        <p style={{textAlign:"left",fontWeight:'bold'}}>Colour</p>
        <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Black</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Blue</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Green</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>Red</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>White</label><br/>
        </div>



        <div style={{border:"1px solid transparent",width:"100%",height:"250px",textAlign:"left"}}>

        <p style={{textAlign:"left",fontWeight:'bold'}}>Discount Range</p>
        <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>10% and above</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>20% and above</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>30% and above</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>40% and above</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>50% and above</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>60% and above</label><br/>
  <input style={{width:"15px",height:"10px"}} type="checkbox" name="vehicle1" value="Bike"/>
  <label style={{color:"#6e6d6b"}}>70% and above</label><br/>
        </div>


      </div>







      <div  style={{border:"1px solid transparent",width:"78%",display:"grid",gridTemplateColumns:"25% 25% 25% 25%",padding:'2rem',gap:'15px'}}>
      {data.map((el)=>(
        <WomensingleCard key={el.id}
          image={el.image}
          title={el.title}
          name={el.name}
          price={el.price}
          id={el.id}
          
          />
          
          

        ))}
        
      </div>
      
        
    </div>
    <div style={{textAlign:'center'}}>
      {<Pagination 
      total={data.length}
      current={page}
      onChange={(val)=>setpage(val)}
    />}
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}
export default WomenProducts