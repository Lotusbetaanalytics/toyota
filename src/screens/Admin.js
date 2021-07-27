import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../components/Navigation";
import Navbar from "../components/Navigation/Navbar";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { createAccount } from "../actions/userActions";
import Loading from "../components/Loading";

const Admin = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");

  const getLocation = useSelector((state) => state.getLocation);
  const { locations } = getLocation;

  const addUser = useSelector((state) => state.addUser);
  const { loading, error, success } = addUser;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createAccount(
        firstName,
        lastName,
        role,
        email,
        location,
        password,
        confirmPassword
      )
    );
  };
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.appGrid}>
        <Navigation />

        <div className={styles.forms}>
          <div className={`${styles.formPadding} col-md-3`}>
            <Link to="/app/users" className={`btn form-control btn-warning`}>
              View Users
            </Link>
          </div>
          {loading && <Loading />}
          {error && <div className="alert alert-danger">{error}</div>}
          {success && (
            <div className="alert alert-success">User Added Successfully</div>
          )}
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className={`${styles.formPadding} col-md-4`}>
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter Firstname"
                />
              </div>
              <div className={`${styles.formPadding} col-md-4`}>
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter Lastname"
                />
              </div>

              <div className={`${styles.formPadding} col-md-4`}>
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                />
              </div>
              <div className={`${styles.formPadding} col-md-4`}>
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                />
              </div>
              <div className={`${styles.formPadding} col-md-4`}>
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
              </div>
              <div className={`${styles.formPadding} col-md-4`}>
                <label>Role</label>
                <select
                  className="form-control"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option>Select .....</option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className={`${styles.formPadding} col-md-4`}>
                <label>Location</label>
                <select
                  type="text"
                  className="form-control"
                  onChange={(e) => setLocation(e.target.value)}
                >
                  {locations &&
                    locations.map((items) => (
                      <option key={items.id} value={items.name}>
                        {items.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className={`${styles.formPadding} col-md-4`}>
                <label style={{ visibility: "hidden" }}>Submit</label>
                <input
                  type="submit"
                  className="form-control btn btn-danger"
                  onChange={(e) => setLocation(e.target.value)}
                  value="Add User"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
