import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./CompetitionPage.css";


const API_URL = "https://kinderpixel-backend.onrender.com";

function CompetitionPage() {
    const [projects, setProjects] = useState([]);

    const navigate = useNavigate();

    const getAllProjects = () => {
        axios
        .get(`${API_URL}/projects`)
        .then((response) => setProjects(response.data))
        .catch((error) => console.error(error));
    };

    useEffect(() => {
        getAllProjects();
    }, []);


    const handleDelete = (id) => {                    //  <== ADD
        // Make a DELETE request to delete the project
        axios
          .delete(`${API_URL}/projects/${id}`)
          .then(() => {
            setProjects(projects.filter(project => project.id !== id));
          })
        };

        // const handleEdit = (id, updatedProject) => {
        //    Make a PUT request to update the project
        //   axios
        //     .put(`${API_URL}/projects/${id}`, updatedProject)
        //     .then((response) => {
        //     setProjects(projects.map(project => project.id === id ? response.data : project));
        //     })
        //     .catch((err) => console.log(err));
        // };

      const navigateToCreateProject = () => {  //link to CreateProject
        navigate("/CreateProject");
      };
      const navigateToEditProject = (id) => {  //link to CreateProject
        navigate(`/EditProject/${id}`);
      };

    return (
        
        <div className="ProjectListPage">
            
            <h1>Current Contestants</h1>
            <button onClick={navigateToCreateProject} className="nav-to-cp">
                        Submit your drawing
            </button>
            <br></br>
            
                   
            <ul className="project-grid">
            {projects.map((project) => {
                return (
                <li key={project.id} className="project-card">
                    <img src={project.picture_url} alt={project.title} />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p className="author">{project.author}, {project.city}</p>
                    <button  className="delete-button" onClick={() => handleDelete(project.id)}>
                    
                        Delete
                    </button>
                    <Link  className="edit-button" onClick={() => navigateToEditProject(project.id)}>
                    
                        Edit
                    </Link>
                </li>
                );
            })}     
           </ul>
           
        </div>
      );

}

export default CompetitionPage;