import {auth} from "../../Utility/firebase"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth" 
import { ClipLoader } from "react-spinners";
import { Link, useNavigate, useLocation } from "react-router-dom";
import classes from "../Auth/Signup.module.css"
import { useContext, useState } from "react";
import {DataContext} from "../../Componets/DataProvider/Dataprovider"
import Type from "../../Utility/action.type"

function Auth() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[error, setError] = useState("")
  const[loading, setLoading] = useState({
    signin:false,
    signup:false
  })

  const [{user}, dispatch] = useContext(DataContext)
  const navigate = useNavigate()
  const navStateData =useLocation()
  console.log(user);
const authHandler = async(e) => {
  e.preventDefault()
  console.log(e.target.name);
  if(e.target.name == "signin") {
    setLoading({...loading, signin:true})
signInWithEmailAndPassword(auth, email, password).then((userinfo) => {
  console.log(userinfo);
  dispatch({
    type:Type.SET_USER,
    user:userinfo.user
  })
  setLoading({...loading, signin:false})
  navigate(navStateData?.state?.redirect || "/")
}).catch((error) => {
 
  setError(error.message)
  setLoading({...loading, signin:false})
})


  }  else {

    createUserWithEmailAndPassword(auth, email, password).then((userinfo) => {
      dispatch({
        type:Type.SET_USER,
        user:userinfo.user
      })
      setLoading({...loading, signup:true})
      console.log(userinfo);
      setLoading({...loading, signup:false})
       navigate(navStateData?.state?.redirect || "/");
    }).catch((error) => {
      
      setError(error.message)
      setLoading({...loading, signup:false})
    })
  }
}
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={classes.loginContainer}>
        <h1>Sign In</h1>
        {navStateData.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData.state.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name=""
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name=""
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.loginSignInButton}
          >
            {loading.signin ? (
              <ClipLoader color="white" size={15} />
            ) : (
              "sign in"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to Amazon's Conditions of Use and Privacy
          Policy.
        </p>

        {/* create account btn */}
        <button
          name="signup"
          type="submit"
          onClick={authHandler}
          className={classes.loginRegisterButton}
        >
          {loading.signup ? (
            <ClipLoader color="white" size={15} />
          ) : (
            "create account"
          )}
        </button>
        {error && (
          <small
            style={{
              paddingTop: "5px",
              color: "red",
            }}
          >
            {error}
          </small>
        )}
      </div>
    </section>
  );
}

export default Auth;
