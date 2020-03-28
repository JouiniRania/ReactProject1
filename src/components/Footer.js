import React from 'react';
import image from '../images/image1.jpg';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Footer = (props) => {
  return (
    <div>
      <Card>
        <CardImg height= "175" width="50" src={image}/>
        <CardBody>
          <CardTitle>My first Image</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};
export default Footer