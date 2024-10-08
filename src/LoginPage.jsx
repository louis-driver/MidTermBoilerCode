
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [hasSubmitted, setSubmitted] = useState(false);

  function goToLoginPage() {
    if (hasSubmitted && authenticated)
      navigate('/landing'); // Navigate to the Login page only if validated
  };

  useEffect(() => {
    setSubmitted(true);
    // Validate username and password
    if (username == "admin" && password == "password")
      setAuthenticated(true);

  }, [hasSubmitted, username, password]);

  // Event handlers to manage values in their respective input fields
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  }

    return (
      <div>
        <h1>Login Here</h1>
        <p>This is the Login Page.</p>
        <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={username} onChange={handleUsernameChange}></input>
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="text" value={password} onChange={handlePasswordChange}></input>
        </div>
        <button onClick={() => goToLoginPage()}>Take Qualifier Quiz</button>
        {hasSubmitted && !authenticated &&
          <p>Sorry, we are unable to authenticate your identity.</p>
        }
      </div>
    );
  };
  
  export default LoginPage;
  