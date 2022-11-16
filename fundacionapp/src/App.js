import './App.css';
import LoginForm from './pages/Login/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Dashboard } from './pages/Dashboard/Dashboard';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/dashboard" element={<PrivateRoute Component={<Dashboard/>}/>}></Route>
          <Route path='/dash' element={<Dashboard/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
