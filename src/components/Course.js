import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    Button,
    Container,
    CardSubtitle
} from 'reactstrap'

const Course = ({course}) => {
    return(
        <Card className="text-center">
            <CardBody>
    <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger">Delete</Button>
                    <Button color="warning ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )


}

export default Course