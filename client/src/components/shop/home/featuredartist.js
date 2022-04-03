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
                <FeaturedArtistinfo/>
            </div>
            
            <Footer/>
        </Fragment>
        
           
    );
};

export default featuredArtist;