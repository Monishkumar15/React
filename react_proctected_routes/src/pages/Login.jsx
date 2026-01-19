import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../slices/UserSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = () =>{
        dispatch(
            setUser({
                name: "sandy",
                email: "sandy34@gmail.com",
            })
        );
        navigate("/")
    };
  return (
    <div>
        <h2>Login</h2>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login