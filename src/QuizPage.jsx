
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const QuizPage = () => {

  const navigate = useNavigate();
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [passed, setPassed] = useState(false);

  const goToWelcomePage = () => {
    if (passed)
      navigate('/welcome'); // Navigate to the Welcome page
  };

  const handleQuestion1 = (event) => {
    setAnswer1(event.target.value);
  }
  const handleQuestion2 = (event) => {
    setAnswer2(event.target.value);
  }
  const handleQuestion3 = (event) => {
    setAnswer3(event.target.value);
  }

  useEffect(() => {
    if (answer1 === 'Frontend Developer' && answer2 === 'MERN' && answer3 === 'useState')
      setPassed(true);
  }), [answer1];
 
    return (
      <div>
        <h1>Take Quiz to Qualify</h1>
        <p>Welcome to the qualifier quiz</p>
        <div class="question">
          <p>What is the title given to a programmer who creates the client-facing user interface of a website?</p>
          <div class="option">
            <input id="q1a1" type="radio" name="question1" value="Fullstack Developer" checked={answer1 === 'Fullstack Developer'} onChange={handleQuestion1} />
            <label htmlFor="q1a1">Full-stack Developer</label>
          </div>
          <div class="option">
            <input id="q1a2" type="radio" name="question1" value="Frontend Developer" checked={answer1 === 'Frontend Developer'} onChange={handleQuestion1} />
            <label htmlFor="q1a1">Frontend Developer</label>
          </div>
          <div class="option">
            <input id="q1a3" type="radio" name="question1" value="Backend Developer" checked={answer1 === 'Backend Developer'} onChange={handleQuestion1}/>
            <label htmlFor="q1a3">Backend Developer</label>
          </div>
        </div>
        <div class="question">
          <p>What is the acronym for a web application that uses React, Node, MongoDB, and Express?</p>
          <div class="option">
            <input id="q2a1" type="radio" name="question2" value="MERN" checked={answer2 === 'MERN'} onChange={handleQuestion2} />
            <label htmlFor="q1a1">MERN</label>
          </div>
          <div class="option">
            <input id="q2a2" type="radio" name="question2" value="RENM" checked={answer2 === 'RENM'} onChange={handleQuestion2} />
            <label htmlFor="q1a1">RENM</label>
          </div>
          <div class="option">
            <input id="q2a3" type="radio" name="question2" value="ERM-M" checked={answer2 === 'ERM-N'} onChange={handleQuestion2}/>
            <label htmlFor="q1a1">ERM-N</label>
          </div>
        </div>
        <div class="question">
          <p>Which function is commonly used in React?</p>
          <div class="option">
            <input id="q3a1" type="radio" name="question3" value="useState" checked={answer3 === 'useState'} onChange={handleQuestion3} />
            <label htmlFor="q1a1">useState</label>
          </div>
          <div class="option">
            <input id="q3a2" type="radio" name="question3" value="useValue" checked={answer3 === 'useValue'} onChange={handleQuestion3} />
            <label htmlFor="q1a1">useValue</label>
          </div>
          <div class="option">
            <input id="q3a3" type="radio" name="question3" value="useVariable" checked={answer3 === 'useVariable'} onChange={handleQuestion3}/>
            <label htmlFor="q1a1">useVariable</label>
          </div>
        </div>
        <button onClick={goToWelcomePage}>Submit Quiz</button>
      </div>
    );
  };
  
  export default QuizPage;
  
  