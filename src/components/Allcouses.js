import React, {useState} from 'react'
import Course from './Course'



const Allcouse = () =>{ 
    const [courses, setCourses] = useState([
        {title: "Java Course", description:"This is Demo Couse"},
        {title: "React-Native", description:"This is demo courese"},
        {title: "Node js", description:"This is demo courese"},
        {title: "JavaScript", description:"This is demo courese"}
    ])
    
    return(
        <div>
            <h1>All Couses</h1>
            <p> List of courese </p>
            {
                courses.length > 0 
                ? courses.map((item) => <Course course={item} />)
                : "No course"
           }
            
           
        </div>

    )
}

export default Allcouse