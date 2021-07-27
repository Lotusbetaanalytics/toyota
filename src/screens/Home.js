import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WelcomeScreen from "../components/UI/WelcomeScreen";
import logo from "../assets/logo.jpg";
import styles from "./styles.module.css";
import { login } from "../actions/userActions";
import Loading from "../components/Loading";

const Home = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userAuth = useSelector((state) => state.userAuth);
  const { loading, error, loginUser } = userAuth;

  const userLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (loginUser) {
      history.push("/app/dashboard");
    }
  }, [history, loginUser]);

  return (
    <div className={styles.app}>
      <div className={styles.grid}>
        <WelcomeScreen />
        <div className={styles.forms}>
          <div className={styles.logo}>
            <img src={logo} alt="Toyota Logo" />
          </div>
          <h6 className="text-center " style={{ padding: ".5rem" }}>
            Welcome Back!
          </h6>
          {loading && <Loading />}
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={userLogin}>
            <div className="row">
              <div className={`${styles.formPadding} col-md-12`}>
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                />
              </div>
              <div className={`${styles.formPadding} col-md-12`}>
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                />
              </div>
              <div className={`${styles.formPadding} col-md-12`}>
                <label />
                <input
                  type="submit"
                  className="form-control btn btn-danger"
                  value="Login"
                />
                <p className="text-center">
                  <br />
                  <small>&copy;2021 Copyrights All Rights & Reserved</small>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
