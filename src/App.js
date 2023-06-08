import React,{useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import {  Route ,Routes,BrowserRouter as  Router} from "react-router-dom";
import Login from './Login'
import { auth } from "./firebase";
function App() {
useEffect(()=>{

},[])
// empty [] it dont take anything so no dependency but it will only going to run once when the app component loads then it wont run again
// but if [user,basket] so everytime the user or basket changes it will run or refire this code again

  return (
    // BEM
  
<Router>

    <div className="app">
      {/* <Header/> */}
      {/* instead of multiple components i pasted it here as we want it in each page */}
      <Routes>

    <Route path="/login" element={<Login/>

    }/>
    <Route path="/" element={[<Header/>, <Home/>]}/>
    {/* <Route path="/" element={[ <Header/>, <Home/>]}/> */}  
    {/* i used the above way to render the multiple components  */}
      {/* it is a default page if it dont math anyting so remain at this page */}
     {/* <Header/> */}
     {/* <Home/> */}
      <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
      </Routes>
    </div>
</Router>
    
  );
}

export default App;
