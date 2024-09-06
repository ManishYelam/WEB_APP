import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        const fetchProjects = async () =>{
            try {
                const response = await axios.get('http://localhost:5000/api/users/2/projects');
                setProjects(response.data);                
            } catch (error) {
                console.error(error);
            }
        }
        fetchProjects();        
    })
  return (
    <div>ProjectList
        {
            projects.map((project)=>{
                <li>{project.name}</li>
            })
        }

    </div>
  )
}

export default ProjectList