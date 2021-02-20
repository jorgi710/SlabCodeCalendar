import './App.css';
import Calendario from './components/Calendario';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Reminder from './components/Reminder';
import Description from './components/Description';

function App() {
  return (
    <div className="container m-5 bg-secondary">
      
      <Router>
            <Link to="/" className="btn btn-secondary lead "> Calendar</Link>
            <Link to="/reminder" className="btn btn-secondary lead ">Add New Reminder</Link>
            <Link to="/description" className="btn btn-secondary lead ">Description</Link>
            <Switch>
                <Router path="/reminder">
                  <Reminder/>
                </Router>
                <Router path="/description">
                <Description/>
                </Router>
                <Router path="/">
                  <Calendario/>
                </Router>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
