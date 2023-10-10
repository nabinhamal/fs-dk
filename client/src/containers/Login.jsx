import React, { useState, useEffect  } from "react";
import { LoginBg1, Logo } from "../assets";
import { LoginInput } from "../components";
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { useNavigate} from "react-router-dom"

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../config/firebase.config";
import { validateUserJWTToken } from "../api";
import { setUserDetails } from "../context/actions/userActions";
import { useDispatch ,useSelector} from "react-redux";
import { alertInfo, alertWarning } from "../context/actions/alertActions";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const user = useSelector(state => state.user)
  const alert = useSelector(state => state.alert)

  useEffect(() => {
    if(user){
      navigate("/" ,{replace: true})
    }
    
  }, [user])
 
  

  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      firebaseAuth.onAuthStateChanged((cred) => {
        if (cred) {
          cred.getIdToken().then((token) => {
            validateUserJWTToken(token).then((data) => {
              
              dispatch(setUserDetails(data));
            });
            navigate("/",{replace : true})
          });
        }
      });
    });
  };

  //actions


  //reducer

  //store- globalized store to store details

  //signup
  const signUpWithEmailPass = async () => {
    if (userEmail === "" || password === "" || confirm_password === "") {
      //aleert message
      dispatch(alertInfo("required fields should not be empty"));
    } else{
        if(password === confirm_password){
          setUserEmail("")
          setPassword("")
          setConfirm_password("")
        await createUserWithEmailAndPassword(firebaseAuth,userEmail,password).then(userCred =>{
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
              cred.getIdToken().then((token) => {
                validateUserJWTToken(token).then((data) => {
                 
                  
                  dispatch(setUserDetails(data));
                });
                navigate("/",{replace : true})
              });
            }
          });
        })
    } else{
//alert message
dispatch(alertWarning("Password doesn't match"));
    }
  }
};

//sign In
const signInWithEmailPass = async() =>{
  if(userEmail !== "" && password !== "" ){
    await signInWithEmailAndPassword(firebaseAuth,userEmail,password).then(userCred =>{
      firebaseAuth.onAuthStateChanged((cred) => {
        if (cred) {
          cred.getIdToken().then((token) => {
            validateUserJWTToken(token).then((data) => {
             
              dispatch(setUserDetails(data));
            });
            navigate("/",{replace : true})
          });
        }
      });
    })
   
  } else {
    //alert message
    dispatch(alertWarning("Password doesn't match"));
  }
}
 

  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      {/*backgroung image*/}
      <img
        src={LoginBg1}
        className="w-full h-full object-cover absolute top-0 left-0 "
        alt=""
      />

      {/*content box*/}
      <div className="flex flex-col fixed items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6 transition-all">
        {/* top logo*/}
        <div className="flex items-center justify-start gap-4 w-full">
          <img src={Logo} className=" w-14" alt="" />
          <p className="text-headingColor font-semibold text-2xl uppercase">
            Daurako Kitchen
          </p>
        </div>

        {/*welcome text*/}

        <p className="text-headingColor font-semibold text-3xl ">
          {isSignUp ? "Welcome" : "Welcome Back"}
        </p>
        <p className="text-xl text-textColor -mt-6 uppercase ">
          {isSignUp ? "Sign Up" : "Sign In"}{" "}
        </p>

        {/*input section*/}
        <div className="w-full flex flex-col items-center  justify-center gap-6 px-4 md:px-12 py-4 ">
          {/* Email input */}
          <LoginInput
            placeholder={"Email here"}
            icon={<FaEnvelope className="text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignUp={isSignUp}
          />
          {/* passwoord input */}
          <LoginInput
            placeholder={"Password here"}
            icon={<FaLock className="text-xl text-textColor" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignUp={isSignUp}
          />
          {/* confirm password input */}
          {isSignUp && (
            <LoginInput
              placeholder={"Confirm Password here"}
              icon={<FaLock className="text-xl text-textColor" />}
              inputState={confirm_password}
              inputStateFunc={setConfirm_password}
              type="password"
              isSignUp={isSignUp}
            />
          )}
          {/* button section */}
          {isSignUp ? (
            <motion.button
              {...buttonClick}
              className="w-full px-4 py-2 rounded-md bg-red-400 cursor-auto test-white capitalize hover:bg-red-500 transition-all duration-1"
              onClick={signUpWithEmailPass}
            >
              Sign Up
            </motion.button>
          ) : (
            <motion.button
              {...buttonClick}
              className="w-full px-4 py-2 rounded-md bg-red-400 cursor-auto test-white capitalize hover:bg-red-500 transition-all duration-1"
              onClick={signInWithEmailPass}
           >
              Sign In
            </motion.button>
          )}

          {!isSignUp ? (
            <p>
              Doesn't have an account?{" "}
              <motion.button
                {...buttonClick}
                className="text-red-400 undeline cursor-pointer bg-transparent"
                onClick={() => setIsSignUp(true)}
              >
                {" "}
                Create One{" "}
              </motion.button>{" "}
            </p>
          ) : (
            <p>
              Already Have An Account ?{" "}
              <motion.button
                {...buttonClick}
                className="text-red-400 undeline cursor-pointer bg-transparent"
                onClick={() => setIsSignUp(false)}
              >
                {" "}
                Sign In Here{" "}
              </motion.button>{" "}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between gap-16">
          <div className="w-24 h-[1px] rounded-md bg-black"></div>
          <p className="text-black">OR</p>
          <div className="w-24 h-[1px] rounded-md bg-black"></div>
        </div>
        <motion.div
          {...buttonClick}
          className="flex  items-center justify-center px-20 py-2 bg-lightOverlay backdrop-blur-md rounded-3xl cursor-pointer gap-4"
          onClick={loginWithGoogle}
        >
          <FcGoogle className="text-3xl" />
          <p className="capitalize text-base text-headingColor">
            SignIn With Google
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
