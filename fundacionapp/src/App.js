import './App.css';
import LoginForm from './pages/Login/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Dashboard } from './pages/Dashboard/Dashboard';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import {ContextProvider,UserContext} from './utils/UserContext';
import {useContext} from 'react';
import { EditForm } from './pages/EditForm/EditForm';


function App() {
  return (
    <Router>
      <div className="App">
        <ContextProvider>
          <Routes>
            <Route path="/" element={<LoginForm />}></Route>
            <Route
              path="/dashboard"
              element={<PrivateRoute Component={<Dashboard />} />}
            ></Route>
            <Route path="/dash" element={<Dashboard />}></Route>
            <Route path="/detail/:identificacion"></Route>
            <Route path="/edit/:identificacion" element={<EditForm/>}></Route>
          </Routes>
        </ContextProvider>
      </div>
    </Router>
  );
}

export default App;
