import React from "react";
import { Button,Image} from 'reactstrap';
const ContactInfo =()=>{
    return(
        <div style={{marginTop:"8rem",display:"flex",justifyContent:"center"}}>
            <div style={{paddingLeft:"6rem",paddingRight:"6rem",paddingTop:"10rem",width:"1000px"}}>
                <h2>Contact Us</h2>
                <p>Address: Kalam Hall of Residence, IIITDM Kurnool</p>
                <p>Phone: 6388505972</p>
                <p>Name: Devendu Tiwari</p>
                <p>Email: devendut1012@gmail.com</p>
                <Button  color="primary">Know more about us</Button>
            </div>
            <div>
                <img src="https://media.istockphoto.com/photos/phone-and-email-icons-on-wooden-cubes-with-contact-us-text-on-blue-picture-id1271752802?b=1&k=20&m=1271752802&s=170667a&w=0&h=sMEPVY49FAy2UHkhyQLWDHlAhYsR2F2NDkNlSEteO3s=" width={1000} height={1000}/>
            </div>
        </div>  
           
    );
};
export default ContactInfo;