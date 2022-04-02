import React, { Fragment } from "react";
import { useHistory} from "react-router-dom";
import "./style.css";
import moment from "moment";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Footer = (props) => {
  
  const history = useHistory();
  return (
    <Fragment>
      <footer
        style={{ background: "#303031", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
            <div style={{display:"flex",justifyContent:"center"}}>
              <span
                className="font-medium text-md px-3 py-4 rounded-lg cursor-pointer"
                onClick={(e) => history.push("/blog")}
              >
                Blog
              </span>
              <span
                className="font-medium text-md px-3 py-4 rounded-lg cursor-pointer"
                onClick={(e) => history.push("/contact-us")}
              >
                ContactUs
              </span>
            </div>
            <div>
              <span
              className="font-medium text-lg rounded-lg px-3 py-2 ">Made in India</span>
            </div>

        {/* <FontAwesomeIcon icon="ta-heart" size="lg" /> */}
        
        
      </footer>
    </Fragment>
  );
};

export default Footer;
