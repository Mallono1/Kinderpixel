import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./EditProjectPage.css";

const API_URL = "https://kinderpixel-backend.onrender.com";

function EditProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [picture_url, setPictureUrl] = useState("");
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");


  const { id } = useParams(); 
  const navigate = useNavigate(); 

  
 
  const handleFormSubmit = (e) => {                          // <== ADD
    e.preventDefault();
    const requestBody = { title, description, author, city, school, picture_url };
    // const requestBody = { title, description, author, city };
    axios
        .put(`${API_URL}/projects/${id}`, requestBody)
        .then((response) => {
        // setProjects(projects.map(project => project.id === id ? response.data : project));
        // Once the project is created navigate to Project List Page
        navigate(`/Competition`)
      })
      
  };
  const deleteProject = () => {                    //  <== ADD
    // Make a DELETE request to delete the project
    axios
      .delete(`${API_URL}/projects/${id}`)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        navigate("/Competition");
      })
      .catch((err) => console.log(err));
  }; 
  useEffect(() => {                                 // <== ADD
    axios
      .get(`${API_URL}/projects/${id}`)
      .then((response) => {
        /* 
          We update the state with the project data coming from the response.
          This way we set inputs to show the actual title and description of the project
        */
        const oneProject = response.data;
        setTitle(oneProject.title);
        setDescription(oneProject.description);
        setAuthor(oneProject.author);
        setSchool(oneProject.school);
        setCity(oneProject.city);
        setPictureUrl(oneProject.picture_url);
      })
      .catch((error) => console.log(error));
    
  }, [id]);
  
  return (
    <div className="editProjectPage">
      <h1>Edit Your Drawing</h1>

      <form onSubmit={handleFormSubmit}>          {/*  <== UPDATE   */}
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Author:</label>
        <textarea
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>City:</label>
        <textarea
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label>School:</label>
        <textarea
          type="text"
          name="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />

        <label>Image URL:</label>
        <textarea
          type="text"
          name="picture_url"
          value={picture_url}
          onChange={(e) => setPictureUrl(e.target.value)}
        />

        <button className="edit-button" type="submit">Edit</button>
      </form>
      {/* <button onClick={deleteProject}>Delete Project</button> */}
    </div>
  );
}

export default EditProjectPage;