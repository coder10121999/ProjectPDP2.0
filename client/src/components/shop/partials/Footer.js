import React, { Fragment } from "react";
import moment from "moment";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#303031", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >

        Made in India  
        {/* <FontAwesomeIcon icon="ta-heart" size="lg" /> */}
        
        
      </footer>
    </Fragment>
  );
};

export default Footer;
