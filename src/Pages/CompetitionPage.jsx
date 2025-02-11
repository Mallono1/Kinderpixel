import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CompetitionPage.css";


const API_URL = "https://kinderpixel-backend.onrender.com";

function CompetitionPage() {
    const [projects, setProjects] = useState([]);

    const getAllProjects = () => {
        axios
        .get(`${API_URL}/projects`)
        .then((response) => setProjects(response.data))
        .catch((error) => console.error(error));
    };

    useEffect(() => {
        getAllProjects();
    }, []);


    const handleDelete = () => {                    //  <== ADD
        // Make a DELETE request to delete the project
        axios
          .delete(`${API_URL}/projects/${projectId}`)
          .then(() => {
            navigate("/projects");
          })
          .catch((err) => console.log(err));
      };  
      const navigateToCreateProject = () => {
        window.location.href = "/CreateProject";
      };

    return (
        
        <div className="ProjectListPage">
            
            <h1>Current Contestants</h1>
            <button onClick={navigateToCreateProject} className="delete-button">
                        Submit your drawing
                    </button>
            <ul className="project-grid">
            {projects.map((project) => {
                return (
                <li key={project.id} className="project-card">
                    <img src={project.picture_url} alt={project.title} />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p className="author">{project.author}, {project.city}</p>
                    <button onClick={handleDelete} className="delete-button">
                        Delete
                    </button>
                </li>
                );
            })}     
           </ul>
        </div>
      );

}

export default CompetitionPage;