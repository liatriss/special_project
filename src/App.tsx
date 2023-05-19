import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from "react";
import { AuthContext } from "./Auth/AuthContext";
import FirstPage from './interfaces/FirstPage';
import LoginForm from './components/LoginForm/LoginForm';

function App() {

  const user = useContext(AuthContext);

  return (
    <>
    {!user ? (
      <>
      
      {/* Login Form */}
      <LoginForm />     
      </>
    ) : (
      <>
        <FirstPage user={user} />
      </>
    )}
    </>
  )
}

export default App;
