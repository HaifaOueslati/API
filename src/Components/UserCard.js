import React from 'react'
import {  Card } from 'react-bootstrap'

function UserCard({user}) {
    return <div className="user-card" >   
        <Card style={{ width: '18rem' }}>
    <Card.Img   variant="top" src="https://iamovers.mobilityex.com/content/images/img_avatar.png" />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
       {user.email}
      
      </Card.Text>
    </Card.Body>
  </Card>
    </div>;
  }
  
  export default UserCard;
  