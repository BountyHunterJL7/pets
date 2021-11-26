import {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

import './styles.css'

export const LoginPage = () => {

    const [mode, setMode] = useState("login");

    const {register, handleSubmit } = useForm();

    const history = useHistory();

    const loginUser = async(formVals) => {

        try { 
            const auth = getAuth();
                
            const loginUser = await signInWithEmailAndPassword(auth, formVals.user, formVals.password);
            console.log(auth);
            history.push('/');
        }catch (error) {
            console.log("error connecting to firebase", error)
        }
    }

    

    const signUpUser = async (formVals) => {
        

        try {
            const auth = getAuth();
            
            const signupUser = await createUserWithEmailAndPassword(auth, formVals.user, formVals.password);
            history.push('/');
        } catch (error) {
            // hanndle correct passworkd
            console.log("ERROR from firebase", error)
        }
    }

    return (
        <div className="pets-page">
            { mode ==="login" && (

                <form className="form-layout" onSubmit={handleSubmit(loginUser)}>
                    <h2>Welcome back, please sign in</h2>

                    <br></br>
                    <label htmlFor="user">Username</label>
                    <input type="email" name="user" required {...register('user')}></input>

                    <label htmlFor="password">Password</label>
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