import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Cookie from "./pages/Policies/Cookie";
import Privacy from "./pages/Policies/Privacy";

import Header from "./components/Header";
import PopUp from "./components/PopUp/PopUp";

function RoutesApp(){
    return(
        <BrowserRouter>
            <PopUp/>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/>}/>
                <Route path='/Cookies' element={ <Cookie/>}/>
                <Route path='/Privacy' element={ <Privacy/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;