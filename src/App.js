import logo from './logo.svg';
import './App.css';

import AllRoutes from './AllRoutes/AllRoutes';
import ARoutes from './AllRoutes/ARoutes';
import Navbar from './Components/Navbar';



function App() {
  return (
    <div className="App">
       <Navbar/>
      
      <ARoutes/>
      
     
     
    </div>
  );
}

export default App;
