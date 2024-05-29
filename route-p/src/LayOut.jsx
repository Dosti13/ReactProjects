import React from "react";
import Header from "./heeader/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export default function LayOut(){
    return(
        <>
    <Header/>
    <Outlet/>
    <Footer />
    </>
    )
}