import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../components/Navigation";
import Navbar from "../components/Navigation/Navbar";
import Card from "../components/UI/Card";
import styles from "./styles.module.css";
import { getLocations } from "../actions/locationActions";

const Dashboard = ({ history }) => {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.userAuth);
  const { loginUser } = userAuth;
  useEffect(() => {
    if (!loginUser) {
      history.push("/");
    }
    dispatch(getLocations());
  }, [history, loginUser, dispatch]);
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.appGrid}>
        <Navigation />
        <div className={styles.content}>
          <div className={styles.contentGrid}>
            <Card
              title="Total Uploaded Content"
              count="5000"
              background={styles.color1}
            />
            <Card
              title="Available Branches"
              count="5"
              background={styles.color2}
            />
            <Card title="Users" count="5" background={styles.color3} />
          </div>
          <div className={styles.conGrid}>
            <div className={styles.charts}>
              <h6>Total Blobs in Storage</h6>
            </div>
            <div className={styles.charts}>
              <h6>Recent Activities</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
