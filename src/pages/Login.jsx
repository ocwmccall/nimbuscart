import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  onAuthStateChanged, getAuth  } from 'firebase/auth';
import { auth } from '../firebase';
 
const Login = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
 
    const onSubmit = (e) => {
      e.preventDefault();

            // Signed in
            // const auth = getAuth();
            const currentUser = auth.currentUser;

             onAuthStateChanged(auth, (user) => {
              if(email === currentUser.email){
                console.log(currentUser)
                navigate("/lists")
              } else {
                setMessage("Please sign in.")
              }

            })

    }
 
  return (
    <main >        
        <section>
            <div>
                <div>                  
                    <h1> NimBusCart </h1>                                                                            
                    <form>                                                                                            
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder=""                                
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <button
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Login                               
                        </button>
                                                                     
                    </form>

                    {/* Syntax: condition ? <expression if true> : <expression if false> */}
                   
                        {
                            message.length === 0 ? <p></p>: <p>{message}</p>
                        }
                                    
                </div>
            </div>
        </section>
    </main>
  )
}

export default Login;
 