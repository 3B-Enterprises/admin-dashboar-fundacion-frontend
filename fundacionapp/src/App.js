import './App.css';
import LoginForm from './pages/Login/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Dashboard } from './pages/Dashboard/Dashboard';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import {ContextProvider,UserContext} from './utils/UserContext';
import { EditForm } from './pages/EditForm/EditForm';
import { Carne } from './components/Carne/Carne';
import { Loading } from './pages/Loading/Loading';


function App() {
  return (
    <Router>
      <div className="App">
        <ContextProvider>
          <Routes>
            <Route path="/" element={<LoginForm />}></Route>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/detail/:consecutive"
              element={
                <PrivateRoute>
                  <EditForm titulo="Detalle" accion="" />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit/:consecutive"
              element={
                <PrivateRoute>
                  <EditForm titulo="Editar" accion="Editar" />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/loading" exact element={<Loading />} />
          </Routes>
        </ContextProvider>
      </div>
    </Router>
  );
}

export default App;
