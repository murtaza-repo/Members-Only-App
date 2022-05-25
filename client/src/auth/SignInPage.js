import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const SignInPage = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [signInError, setSignInError] = useState('');
  const history = useHistory();

  const onClickSignIn = async () => {
    try{
      setSignInError('');
      await signInWithEmailAndPassword(getAuth(),emailValue, passwordValue);
      history.push('/');
    } catch(e) {
      if(e.message.includes("wrong-password")){
        setSignInError("Incorrect login attempt!!!");
      }
      else if(e.message.includes("user-not-found")){
        setSignInError("You are not a member!!!");
      }
      else if(e.message.includes("too-many-requests")){
        setSignInError("Too many login attempts. Please try again later!")
      }
      else if(e.message.includes("invalid-email")){
        setSignInError("Please type a valid email address...")
      }
      else{
        setSignInError("Something went wrong! Try again...")
      }
    }
  }

  return (
    <div className="full-height-page">
      <div className="centered-container space-before">
        {signInError 
          ? <div><p className="error-message">{signInError}</p></div>
          : null
        }
        <input 
          type="email" 
          value={emailValue}
          placeholder="Email address"
          className="full-width"
          onChange={e => {setEmailValue(e.target.value); setSignInError('')}}
          required
        />
        <input 
          type="password" 
          value={passwordValue}
          placeholder="Password"
          className="full-width"
          onChange={e => {setPasswordValue(e.target.value); setSignInError('')}}
          required
        />
        <button
          className="full-width"
          onClick={onClickSignIn}
        >Sign In</button>
      </div>
    </div>
  )
}
