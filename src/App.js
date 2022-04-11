import React from "react";
import './App.css';
import Quotes from "./components/Quotes";
import axios from "axios";


function App() {
  const [simpsonsQuote, setSimpsonsQuote] = React.useState();

  const getQuotes = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        setSimpsonsQuote(data[0])
      });
  };

  return (
    <div className="App">
      <Quotes quotes={simpsonsQuote} />
      <button type="button" onClick={getQuotes}>Get quotes</button>
    </div>
  );
};

export default App;
