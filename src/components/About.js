import React from 'react'
import {Jumbotron, Container, Button} from 'reactstrap'

const About = () =>{
return(
    <div>
        <Jumbotron className="text-center">
        <h1>SALIM MEERASAB BHANDI</h1>
        <h3>Full Stack Web Developer</h3>
        
        <Container>
                <Button color="primary" outline>Know More</Button>
            </Container>
        </Jumbotron>
    </div>
)
}
export default About