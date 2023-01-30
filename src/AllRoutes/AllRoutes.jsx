import Bagbrand from "../Components/Bagbrand";
import Bigoffer from "../Components/Bigoffer";
import Brand from "../Components/Brand";
import BrandToBag from "../Components/BrandToBag";
import Budgetbuys from "../Components/BudgetBuys";
import Category from "../Components/Category";
import Footer from "../Components/Footer";
import Grand from "../Components/Grand";
import LastCate from "../Components/LastCate";

import Navbar from "../Components/Navbar";
import Poster from "../Components/Poster";
import RoundBrand from "../Components/RoundBrand";
import Shopcate from "../Components/ShopCate";
import ARoutes from "./ARoutes";



function AllRoutes(){
    return(
        <>
        
       
        
        <Poster/>
        <Bigoffer/>
        <Brand/>
        <Grand/>
        <Bagbrand/>
        <BrandToBag/>
        <RoundBrand/>
        <Budgetbuys/>
        <Category/>
        <Shopcate/>
        <LastCate/>
        <Footer/>
        
        
      

        </>
    )
}
export default AllRoutes;