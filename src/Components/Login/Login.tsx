import './Login.css';
import { Link } from 'react-router-dom';
import CreateAccount from '../Create-Account/CreateAccount';
function Login() {
    return ( 
    <div id = "main-container">
        <div id = "title-container">
            <div>{"{ }"}</div>
            <div>CurLee</div>
            <div>Quiz System</div>
        </div>
        <div id = "login-container">

            <div id = "Privilege"> QUIZ-TAKER </div> 
            <div>
               <form>
                    <div id = "form-container">
                        <div>
                            <label>
                                Enter Username <br/>
                                <input type="text"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Enter Password <br/>
                                <input type="password"/>
                            </label>
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                        
                        
                        </div>
                </form>
            </div>
          

            <div>
                <a href = ''>Create Account</a>
                <a href = ''>Recover Account</a>
                {/* <Link to="">Create Account</Link>
                <Link to="">Recover Account</Link> */}



            </div>
             
        </div>
        {
           <CreateAccount/>
        }

    </div> 
    );
}

export default Login;