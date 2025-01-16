import './App.css';
import { useState } from "react";

function Display({ display }) {
  const getFontSize = (text) => {
    if (text.length > 50) {
      return '1.5rem';
    } else if (text.length > 30) {
      return '2rem';
    } else {
      return '2.5rem';
    }
  };

  return (
    <div 
      className="display-text"
      style={{ fontSize: getFontSize(display) }}
    >
      {display}
    </div>
  );
}

function Key({ label, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState("C-PEITEL3 EXPECTATIONS");

  const items = [
    "Being On Time",               
    "Making An Effort",            
    "Being High Energy",          
    "Having A Positive Attitude", 
    "Being Passionate",           
    "Using Good Body Language",   
    "Being Coachable",            
    "Doing A Little Extra",       
    "Being Prepared",             
    "Having A Strong Work Ethic"  
  ];

  const itemClickHandler = (index) => {
    setDisp(items[index]);  
  };

  const resetClickHandler = () => {
    setDisp("10 Things That Require Zero Talent");
  };

  const nameClickHandler = () => {
    const fullName = "Adrian Jhan Y. Arcega";  
    setDisp(fullName.toUpperCase());
  };

  const whatILearned = "One of the several things that I learned was the fundamentals of how a basic web design is made, along with the accompanied use of github and its commands, which is highly valuable for my future's career.";
  const whatIWantToLearn = "In learning, I would always like to further my knowledge more. This course, I believe, would provide me the relevant information regarding web development, delving deeper.";
  const howIWillLearn = "I will exert full effort in participating and active listening in class. At home, advanced reading/studying will be done. With these things in mind, I am hopeful that it will help me strengthen my foundation further in web development ";

  const whatILearnedHandler = () => setDisp(whatILearned);
  const whatIWantToLearnHandler = () => setDisp(whatIWantToLearn);
  const howIWillLearnHandler = () => setDisp(howIWillLearn);

  return (
    <div className="App">
      <div className="Header">
        Adrian Jhan Y. Arcega - IT3A
      </div>

      <div className="Calc">
        <div className="Disp">
          <Display display={disp} />
        </div>

        <div className="Questions">
          <Key label={"What I learned?"} onClick={whatILearnedHandler} />
          <Key label={"What I want to learn?"} onClick={whatIWantToLearnHandler} />
          <Key label={"How will I learn?"} onClick={howIWillLearnHandler} />
        </div>

        <div className="Buttons">
          {items.map((item, index) => (
            <Key 
              key={index} 
              label={index} 
              onClick={() => itemClickHandler(index)} 
              className="button"
            />
          ))}
          <Key label={"RESET"} onClick={resetClickHandler} className="Clear" />
          <Key label={"NAME"} onClick={nameClickHandler} className="Name" />
        </div>
      </div>
    </div>
  );
}

export default App;
