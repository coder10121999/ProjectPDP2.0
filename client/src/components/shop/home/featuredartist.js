import React,{ Fragment, createContext, useReducer } from "react";
import {Card, Button} from "reactstrap";
import { Navber, Footer} from "../partials";
import FeaturedArtistinfo from "./FeaturedArtistinfo";
import Layout from "../layout";



const featuredArtist =()=>{
    return(
        <Fragment>
            <div className="flex-grow">
                <Navber />
                <div style={{paddingTop:"8rem",paddingBottom:"1rem",textAlign:"center"}}>
                    <span
                    style={{ letterSpacing: "0.10rem",textAlign:"center"}}
                    className="text-center font-bold uppercase text-gray-800 text-2xl text-center"
                    >Featured Artists</span>
                </div>
                <hr />
                <div  className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
                style={{display:"flex",justifyContent:"space-between",flexDirection:"row",flexWrap:"wrap",paddingTop:"2rem",paddingLeft:"2rem",paddingRight:"2rem"}}>
                    <FeaturedArtistinfo/>
                </div>
            </div>
            
            <Footer/>
        </Fragment>
        
           
    );
};

export default featuredArtist;