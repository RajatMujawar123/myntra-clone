import {Route,Routes} from "react-router-dom"
import Bag from "../Components/Bag";
import Mens from "../Components/Mens";
import MensProducts from "../Components/MensProducts";
import Profile from "../Components/Profile";
import SingleProduct from "../Components/SingleProduct";
import Women from "../Components/Women";
import WomenProducts from "../Components/WomenProducts";
import WomenSingleproducts from "../Components/WomenSingleProduct";
import AllRoutes from "./AllRoutes";
import Private from "../Components/PrivateRoutes"
const ARoutes=()=>{
    return(
        <div>
            <Routes>
            <Route path="/" element={<AllRoutes/>}/>
            <Route path="/Bag" element={<Private><Bag/></Private>}/>
            <Route path="/Mens" element={<Mens/>}/>
            <Route path="/Women" element={<Women/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/MensProducts" element={<MensProducts/>}/>
            <Route path="/WomenProducts" element={<WomenProducts/>}/>
            <Route path="/MensProducts/:id" element={<SingleProduct/>}/>
            <Route path="/WomenSingleproducts/:id" element={<WomenSingleproducts/>}/>
            
            
        </Routes>

        </div>
    )
}
export default ARoutes;