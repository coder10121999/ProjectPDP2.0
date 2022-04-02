import React from "react";
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
const BlogInfo =()=>{
    return(
        <div style={{marginTop:"10rem",display:"flex",justifyContent:"center"}}>
            <Card>
                <CardImg top style={{width:"200px"}} src="/images/blog.jpg" alt="Card image " />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                
                </CardBody>
            </Card>
            <Card>
                <CardImg top style={{width:"200px"}} src="/images/blog.jpg" alt="Card image " />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                
                </CardBody>
            </Card>
        </div>  
           
    );
};
export default BlogInfo;