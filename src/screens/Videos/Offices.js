import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDepartments } from "../../actions/locationActions";
import Navigation from "../../components/Navigation";
import Navbar from "../../components/Navigation/Navbar";
import styles from "../styles.module.css";
import Location from "../../components/Location";
import Loading from "../../components/Loading";

const VideoOffices = ({ match }) => {
  const name = match.params.name;
  const dispatch = useDispatch();
  const getDepartment = useSelector((state) => state.getDepartment);
  const { loading, error, departments } = getDepartment;

  useEffect(() => {
    // if (!name) {
    dispatch(getDepartments(name));
    // }
  }, [dispatch, name]);
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.appGrid}>
        <Navigation />
        {loading && <Loading />}
        {error && <div className="alert alert-danger">{error}</div>}
        <div className={styles.content}>
          {departments &&
            departments.map((items) => (
              <Location
                name={items.name}
                url={`/app/videos/${name}/${items.name}`}
                key={items.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoOffices;
