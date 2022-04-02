import React,{Fragment} from "react";
import {Card, Button} from "reactstrap";
import { Navber, Footer} from "../partials";
import BlogInfo from "./BlogInfo";
const Blog =()=>{
    return(
        <Fragment>
            <div className="flex-grow">
                <Navber />
                <BlogInfo/>
            </div>
            
            <Footer/>
        </Fragment>
        
           
    );
};
export default Blog;