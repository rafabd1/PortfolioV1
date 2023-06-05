import React from "react";
import { Route, BrowserRouter, Routes,useParams } from "react-router-dom";
import Home from "../pages/home";

const Router = () => {
    return(
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />}/>

          </Routes>
        </BrowserRouter>
    )
};

//Carrega a página do edital e passa o id do edital como parametro
// function Invoice() {
//     let params = useParams();
//     return Edital(params.editalId);
// }


export default Router;