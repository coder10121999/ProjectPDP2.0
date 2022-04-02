import React from "react";
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
const BlogInfo =()=>{
    return(
        <div style={{marginTop:"10rem",display:"flex",justifyContent:"center"}}>
            <Card>
                <CardImg top style={{ width:"400px"}} src="https://indianartideas.in//articleimages/1526293249Traditional%20Art.JPG" alt="Card image " />
                <CardBody>
                <CardTitle>Rediscovering the Indian Traditional Art Paintings</CardTitle>
                <CardSubtitle>Posted by Shashvat Vats</CardSubtitle>
                <Button  color="primary" href="https://indianartideas.in/blog/traditional-art/rediscovering-the-indian-traditional-art-paintings"  style={{marginLeft: "50px"}}>Read more</Button>
                
                </CardBody>
            </Card>
            <Card>
                <CardImg top style={{marginLeft:"200px", width:"400px"}} src="http://s3-ap-southeast-1.amazonaws.com/assets1.craftsvilla.com/blog/wp-content/uploads/2016/10/20172136/Indian-folk-paintings.jpg" alt="Card image " />
                <CardBody>
                <CardTitle>FROM MADHUBANI TO KALAMKARI, THESE 11 INDIAN ART FORMS HAVE SURVIVED THE TEST OF TIME</CardTitle>
                <CardSubtitle>BY ADITI RAY</CardSubtitle>
                <Button  color="primary" href="https://www.craftsvilla.com/blog/indian-art-forms-painting-madhubani-warli/">Read More</Button>
                
                </CardBody>
            </Card>
        </div>  
           
    );
};
export default BlogInfo;