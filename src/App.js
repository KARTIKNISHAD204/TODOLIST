
import './App.css';
import Header from './component/header';
import About from './component/pages/About';
import Policy from './component/pages/About';
import Services from './component/pages/About'

import Todolist from './component/todolist';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Route path='/about' component={About} />
      <Route path='/policy' component={Policy} />
      <Route path='/services' component={Services} />
      </Router>
      <div>
        This is Home Page 
      </div>
      <Todolist/>

    </div>
  );
}

export default App;
