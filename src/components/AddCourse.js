import React from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

const AddCourse = () =>{
    return(
        <div>
            <h1 className="text-center my-3">Fill Course Detail</h1>
        <Form>
            <FormGroup>
                <label for="userId">Course Id</label>
                <Input type="text" placeholder="Enter Here" name="userId" id="userId"/>
            </FormGroup>

            <FormGroup>
                <label for="title">Course Title</label>
                <Input type="text" placeholder="Enter Title Here" id="title"/>
            </FormGroup>

            <FormGroup>
                <label for="description">Course Id</label>
                <Input type="textarea" placeholder="Enter Descriptio Here" id="description"
                 style={{height:150}}
                 />
            </FormGroup>

            <Container className="text-center">

            <Button color="success">Add Course</Button>
            <Button color="warning ml-2">Clear</Button>

            </Container>

        </Form>


        </div>
    )
}
export default AddCourse