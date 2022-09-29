import './App.css';
import Create from './_services/create';
import Read from './_services/read';
import Update from './_services/update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h1 className='title'>
          React registration form
        </h1>
        <Routes>

          <Route exact path='/create' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
