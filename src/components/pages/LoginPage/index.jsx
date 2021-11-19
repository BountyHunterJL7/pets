import {useState} from 'react';
import { useForm } from 'react-hook-form';

import './styles.css'

export const LoginPage = () => {

    const [mode, setMode] = useState("login");

    const {register, handleSubmit} = useForm();

    const loginUser = (formVals) => {

    }

    const signUpUser = (formVals) => {

    }

    return (
        <div className="pets-page">
            { mode ==="login" && (

                <form className="form-layout" onSubmit={handleSubmit(loginUser)}>
                    <h2>Welcome back, please sign in</h2>

                    <br></br>
                    <label htmlFor="user">Username</label>
                    <input type="email" name="user" required {...register('user')}></input>

                    <labe htmlFor="password">Password</labe>
                    <input type="password" name="password" required {...register('password')}></input>

                    <input type="submit" value="Login"></input>
                    <br></br>
                    <p>Dont have an account? create one with your email and password</p>
                    <button onClick={()=> setMode("signup")}>Sign Up</button>
                </form>

            )

            }

            { mode ==="signup" && (

            <form className="form-layout" onSubmit={handleSubmit(signUpUser)}>
                <h2>Create a new account</h2>

                <br></br>
                <label htmlFor="user">Email</label>
                <input type="email" name="user" required {...register('user')}></input>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" required {...register('password')}> </input>

                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input type="password" name="passwordConfirm" required {...register('passwordConfirm')}></input>

                <input type="submit" value="Sign up"></input>
                <br></br>
                <p>Already have an account?</p>
                <button onClick={()=> setMode("login")}>Login</button>
            </form>

            )

            }
        </div>
    )
}