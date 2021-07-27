import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../components/Navigation";
import Navbar from "../components/Navigation/Navbar";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { getUsers } from "../actions/userActions";
import Loading from "../components/Loading";

const UsersScreen = () => {
  const dispatch = useDispatch();

  const getUser = useSelector((state) => state.getUser);
  const { loading, error, users } = getUser;

  useEffect(() => {
    if (!users) {
      dispatch(getUsers());
    }
  }, [users, dispatch]);
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.appGrid}>
        <Navigation />

        <div className={styles.forms}>
          <div className={`${styles.formPadding} col-md-3`}>
            <Link to="/app/admin" className={`btn form-control btn-warning`}>
              Create User
            </Link>
          </div>
          {loading && <Loading />}
          {error && <div className="alert alert-danger">{error}</div>}

          <table className="table table-bordered">
            <thead>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Location</th>
              <th>Created AT</th>
            </thead>
            <tbody>
              {users &&
                users.map((items) => (
                  <tr key={items.id}>
                    <td>{items.firstName}</td>
                    <td>{items.lastName}</td>
                    <td>{items.email}</td>
                    <td>{items.role}</td>
                    <td>{items.location}</td>
                    <td>{items.created}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersScreen;
