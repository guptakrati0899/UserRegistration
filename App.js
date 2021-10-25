
import './App.css';
import UserSignup from './pages/registration/UserSignup';
import Forgotemail from './pages/Forgot_email/Forgotemail'
import Signin from './pages/Sign_in/Signin';
import Resetpassword from './pages/Reset_password/Resetpassword';
import Home from "./components/Home/Home";
import Archive from './pages/Archive/Archive';
import Trash from "./pages/Trash/Trash"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';




function App() {
  return <div className="AppDiv">
    <Router>
    <Switch>
      <Route exact path="/" component={Signin} />


      <Route  path="/resetpassword" component={Resetpassword} />

      <Route  path="/UserSignup" component={UserSignup} />


      <Route  path="/Forgotemail" component={Forgotemail} />
      <Route path="/Dashboard" component={Dashboard}/>

      </Switch>
      </Router>
 
  
  
    </div>
    
}

export default App;
