import './App.css';
import LoginForm from './components/Login/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Dashboard } from './components/Dashboard/Dashboard';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/dashboard" element={<PrivateRoute Component={<Dashboard/>}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
