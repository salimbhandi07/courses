import React from 'react';
// import { Button } from 'bootstrap';
import './App.css';
import Header from './components/Header'
import {Button, Col, Container, Row} from 'reactstrap'
import { Alert } from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify'
import Home from './components/Home';
import Course from './components/Course';
import Allcouse from './components/Allcouses';
import AddCourse from './components/AddCourse';
import Menu from './components/Menu';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Contact from './components/Contact';
import About from './components/About';


function App() {
    const btnHandle = () =>{
      toast.error("done", {
        position: "top-center"
      })
    }

  return (
    <div>
      <Router>
      <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={4}>
           <Menu />


          </Col>
          <Col md={8}>
            <Route path="/" component={Home} exact/>
            <Route path="/add-course" component={AddCourse} exact/>
            <Route path="/view-course" component={Allcouse} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/contact" component={Contact} exact/>
            




                   
          </Col >

        </Row>
      </Container>


      </Router>

  
    </div>
  );
}

export default App;
