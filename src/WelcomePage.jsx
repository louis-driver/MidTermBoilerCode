
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const WelcomePage = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [hasSubmitted, setSubmitted] = useState(false);

  const goToHomePage = () => {
    navigate('/'); // Navigate to the home page
  };

  // Send data in email 
  const sendEmail = () => {
    //Display data to be sent
    console.log("Username:", username, "Email:", email, "Firstname:", firstname, "Lastname:", lastname);
    //TODO should send actual email
  }

  useEffect(() => {
    if (username != "" && email != "" && firstname != "" && lastname != "")
      setSubmitted(true);

  }, [hasSubmitted, username, email, firstname, lastname]);

  // Event handlers to manage values in their respective input fields
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  }
  const handleEmailChange = event => {
    setEmail(event.target.value);
  }
  const handleFirstnameChange = event => {
    setFirstname(event.target.value);
  }
  const handleLastnameChange = event => {
    setLastname(event.target.value);
  }
 
    return (
      <div>
        <h1>Welcome to HackerCon</h1>
        <p>Welcome SuperHacker You Are Inz</p>
        <label htmlFor="username">Create a Username</label>
        <input id="username" type="text" value={username} onChange={handleUsernameChange}></input>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={handleEmailChange}></input>
        <label htmlFor="firstname">First Name</label>
        <input id="firstname" type="text" value={firstname} onChange={handleFirstnameChange}></input>
        <label htmlFor="lastname">Last Name</label>
        <input id="lastname" type="text" value={lastname} onChange={handleLastnameChange}></input>
        <button onClick={sendEmail}>Submit</button>
        <button onClick={goToHomePage}>HOME</button>
      </div>
    );
  };
  
  export default WelcomePage;
  
  