import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import BagMensProduct from "./BagMensProduct";
import BagWomenProduct from './BagWomenProduct'

const Bag=()=>{
  let  navigate=useNavigate();
    const [item, setItem] = useState([])

useEffect(() => {
  const item = JSON.parse(localStorage.getItem('items'));
  if (item) {
   setItem(item);
  }
  console.log(item)
  let price=""
}, []);

const place=()=>{
  setTimeout(() => alert("Thank you for Placeing Your Order"), 2000);
  setTimeout(() => alert('Please Wait, We are Proceessing'), 5000);
  setTimeout(() =>alert ('Order Confirmed'), 7000);
  setTimeout(() => alert('Order Placed'), 9000);
  setTimeout(() => navigate('/'), 10000);
  
  
}
    return(
        <div>
          <div style={{border:"0px solid red",width:"80%",margin:"auto",display:"flex",marginTop:"50px"}}>
          <div style={{marginTop:"10px",border:"1px solid rgba(0, 0, 0, 0.35)",width:"60%"}}>
            <form  style={{textAlign:'center'}}>
              <h1 style={{color:"#6e6d6b"}}>Enter Your Shipping Addresh</h1>
              <input  type="text" placeholder="Enthe the name"/><br/>
              <input type="text" placeholder="Enthe the Full Addresh"/><br/>
              <input type="text" placeholder="Enthe the Mobile No"/>
            </form>
            <div style={{marginRight:"300px"}}>
              <h5 style={{color:"#6e6d6b"}}>*Prices have been Droped</h5>
              
              </div>

            <div style={{border:"1px solid rgba(0, 0, 0, 0.35)"}}>
          {
            item.map((el)=>(
              <div style={{textAlign:"center",marginTop:"20px",marginRight:"350px",display:"flex"}} key={el.id}>
                <div>
              <img style={{width:"100%",height:"98%"}} src={el.image} alt="error" />
              </div>
              <div>
              <h2>{el.title}</h2>
              <h4>{el.name}</h4>
              
      
              </div>
            </div>
            ))
          }
          </div>
          </div>
          <div style={{border:"1px solid rgba(0, 0, 0, 0.35)",width:"40%"}} >

            <div style={{border:"1px solid rgba(0, 0, 0, 0.35)",width:"80%",height:"400px",margin:"auto",marginTop:"50px",textAlign:"left"}}>
              <h3 style={{color:"#6e6d6b"}}>Price Details</h3>
              {item.map((val)=>(
                <div >
                <h5 style={{color:"#6e6d6b"}}>Total MRP.  <span style={{marginLeft:'280px'}}>{val.price}.00</span></h5>
                </div>
                 
              ))}
              
             <p style={{color:"#6e6d6b"}}>Convenence Fee <span style={{marginLeft:'280px'}}>0.00</span> </p>
             <p style={{color:"#6e6d6b"}}>Shipping Fee <span style={{marginLeft:'280px'}}>Free</span> </p>
             <button onClick={place} style={{width:"300px",marginLeft:"20px",height:"65px",color:"white",backgroundColor:"#ff3f6c",fontWeight:"bold",fontSize:"25px"}}>Place Order</button>
              
            </div>
          </div>
          </div>
        <div style={{border:"1px solid white",width:"90%",height:"800px",margin:"auto",marginTop:"20px"}}>
          <h3 style={{textAlign:"left",color:"#6e6d6b"}}>You May Also Like</h3>
          <div style={{display:"flex",marginLeft:"5px",rowGap:"2px"}}>
          <div>
          <BagMensProduct/>
          </div>
          <div>
            <BagWomenProduct/>
          </div>
          </div>
        </div>
          
        </div>
    )
}
export default Bag;
