import Bigoffer from "./Bigoffer";
import BrandToBag from "./BrandToBag";
import Budgetbuys from "./BudgetBuys";
import Footer from "./Footer";
import Grand from "./Grand";
import MensBagbrand from "./MensBagBrand";
import MensBrand from "./MensBrand";
import MensCategory from "./MensCategory";
import MensLastCate from "./MensLastCate";
import MensPoster from "./MensPoster";
import MensRoundBrand from "./MensRoundBrand";
import Shopcate from "./ShopCate";
import {Link, useNavigate} from "react-router-dom"
import MensProducts from "./MensProducts";




const Mens=()=>{
    const navigate=useNavigate();
    const hclick=()=>{
        navigate("/MensProducts")
    }
    return(

         <div onClick={hclick} >
            
            <MensPoster/>
            <Bigoffer/>
            <MensBrand/>
            <Grand/>
            <MensBagbrand/>
           <BrandToBag/>
           <MensRoundBrand/>
           <Budgetbuys/>
           <MensCategory/>
           <Shopcate/>
           <MensLastCate/>
           <Footer/>
           
            
        </div>
    )
}
export default Mens;