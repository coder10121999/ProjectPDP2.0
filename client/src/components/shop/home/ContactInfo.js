import React from "react";
import { Button,Image} from 'reactstrap';
const ContactInfo =()=>{
    return(
        <div style={{marginTop:"8rem",display:"flex",justifyContent:"center"}}>
            <div style={{paddingLeft:"6rem",paddingRight:"6rem",paddingTop:"10rem",width:"1000px"}}>
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris a diam maecenas sed enim ut sem viverra aliquet. Elit duis tristique sollicitudin nibh sit. At lectus urna duis convallis convallis tellus id. Elementum facilisis leo vel fringilla est ullamcorper.</p>
                <Button  color="primary">Learn more</Button>
            </div>
            <div>
                <img src="images/contactus.png" width={1000} height={1000}/>
            </div>
        </div>  
           
    );
};
export default ContactInfo;