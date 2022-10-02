import './App.css';
import Add from './components/addUser';
import Show from './components/showUsers';
import Update from './components/updateUser';
import Header from './components/header';
import Footer from './components/footer';
import Error from './components/error';
import Index from './components/index';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [completeName, setCompleteName] = useState('');
  const [error, setError] = useState([]);

  const MY_TOKEN = "791c3fed1a4a35e204a631f55c5a92ec627644c2de78e6de53bd06e886fe44f8";

  const handleDataError = (errorResponseData) => {
    let errors = [];
    errorResponseData.forEach(dataError => {
      errors.push(`${dataError.field} ${dataError.message}`);
    });
    setError(errors);
  };

  const handleChange = (event) => {
    if (event.target.name === "firstName") {
        setFirstName(event.target.value);
    } else if (event.target.name === "lastName") {
        setLastName(event.target.value);
    } else if (event.target.name === "email") {
        setEmail(event.target.value);
    } else if (event.target.name === "gender") {
        setGender(event.target.value);
    } else if (event.target.name === "completeName") {
      setCompleteName(event.target.value);
  }
};

const handleSubmit = (event) => {
    event.preventDefault();
};
  
  return (
    <Router>
      <Header/>
      <Error
      error={error}
      setError={setError}
      />
      <main className="main">
        <Routes>
        <Route exact path='/user-manager' 
          element={<Index 
                  />} 
          />
          <Route path='/add' 
          element={<Add 
                  firstName={firstName}
                  setFirstName={setFirstName}
                  lastName={lastName}
                  setLastName={setLastName}
                  email={email}
                  setEmail={setEmail}
                  gender={gender}
                  setGender={setGender}
                  MY_TOKEN={MY_TOKEN} 
                  handleChange={handleChange} 
                  handleSubmit={handleSubmit}
                  handleDataError={handleDataError}
                  setError={setError} 
                  />} 
          />
          <Route path='/show' 
          element={<Show 
                  MY_TOKEN={MY_TOKEN}
                  handleDataError={handleDataError}
                  setError={setError}
                  />} 
          />
          <Route path='/update' 
          element={<Update
                  firstName={firstName}
                  setFirstName={setFirstName}
                  lastName={lastName}
                  setLastName={setLastName}
                  email={email}
                  setEmail={setEmail}
                  gender={gender}
                  setGender={setGender}
                  completeName={completeName}
                  setCompleteName={setCompleteName}
                  MY_TOKEN={MY_TOKEN}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  handleDataError={handleDataError}
                  setError={setError}  
                   />} 
          />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
