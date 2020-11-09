import React from 'react'
import {Jumbotron, Container, Button} from 'reactstrap'

const Home = () =>{
    return(
        <div>
            <Jumbotron className="text-center">
            
            <h1> LearnCodeWith Salim</h1>
            <p>This is Developed by LearnCode With Salim for 
            a Learning purpose Backend is on Node js</p>
            <Container>
                <Button color="primary" outline>Start Using</Button>
            </Container>

            </Jumbotron>

        </div>
    )
}

export default Home