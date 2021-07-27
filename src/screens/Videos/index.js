import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocations } from "../../actions/locationActions";
import Location from "../../components/Location";
import Navigation from "../../components/Navigation";
import Navbar from "../../components/Navigation/Navbar";
import styles from "../styles.module.css";
import Loading from "../../components/Loading";

const VideoFolder = () => {
  const dispatch = useDispatch();
  const getLocation = useSelector((state) => state.getLocation);
  const { loading, error, locations } = getLocation;

  useEffect(() => {
    if (!locations) {
      dispatch(getLocations());
    }
  }, [dispatch, locations]);
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.appGrid}>
        <Navigation />
        {loading && <Loading />}
        {error && <div className="alert alert-danger">{error}</div>}
        <div className={styles.content}>
          {locations &&
            locations.map((items) => (
              <Location
                name={items.name}
                url={`/app/videos/${items.name}`}
                key={items.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoFolder;
