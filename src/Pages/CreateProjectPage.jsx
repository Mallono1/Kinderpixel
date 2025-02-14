import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateProjectPage.css";

const API_URL = "https://kinderpixel-backend.onrender.com";

function CreateProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [picture_url, setPictureUrl] = useState("");
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");


  
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {                          // <== ADD
    e.preventDefault();

    const requestBody = { title, description, author, picture_url, city };
    axios
      .post(`${API_URL}/projects`, requestBody)
      .then((response) => {
        // Once the project is created navigate to Project List Page
        navigate(-1);
      })
      .catch((error) => console.log(error));
  };

  
  return (
    <div className="CreateProjectPage">
      <h1>Add Your Drawing</h1>

      <form onSubmit={handleSubmit}>          {/*  <== UPDATE   */}
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

        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProjectPage;
