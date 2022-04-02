import React,{Fragment} from "react";
import { Navber, Footer} from "../partials";
import ContactInfo from "./ContactInfo";
const ContactUs =()=>{
    return(
        <Fragment>
            <div className="flex-grow">
                <Navber />
                <ContactInfo/>
            </div>
            
            <Footer/>
        </Fragment>
        
           
    );
};
export default ContactUs;