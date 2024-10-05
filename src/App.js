import Login from "./component/login";
import Back from "./component/back";
import Login_signup_completed from "./component/login_signup_completed";
import './index.css';
import './component/back.css'
import './component/login_signup_completed.css'
import './handleSignUp';


function App() {
  return (
    <div class="container">
    <Login_signup_completed />
    <Login />
    <Back />
    
    </div>
    
  );
}

export default App;

