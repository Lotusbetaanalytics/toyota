import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getToyotaBlobs } from "../../actions/blobActions";
import Navigation from "../../components/Navigation";
import Navbar from "../../components/Navigation/Navbar";
import styles from "../styles.module.css";
import bg from "../../assets/bg.jpg";
import Loading from "../../components/Loading";
import Paginate from "./Paginate";

const Blobs = ({ match }) => {
  const location = match.params.location;
  const department = match.params.department;
  const page = match.params.page || 1;

  const limit = 10;
  const dispatch = useDispatch();
  const getBlobs = useSelector((state) => state.getBlobs);
  const { loading, error, blobs, response } = getBlobs;

  // const get = () => {
  //   dispatch(getToyotaBlobs(location, department));
  // };

  useEffect(() => {
    if (location && department && page) {
      dispatch(getToyotaBlobs(location, department, page));
    }
  }, [dispatch, location, department, page]);
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.appGrid}>
        <Navigation />

        <div className={styles.content}>
          {loading && <Loading />}
          {error && <div className="alert alert-danger">{error}</div>}
          {/* <button onClick={get}>Get Videos</button> */}
          <div className={styles.blobGrid}>
            {blobs &&
              blobs.map((items, index) => (
                <div>
                  <Link to={`/app/play/${location}/${department}/${index}`}>
                    <img
                      src={bg}
                      alt="CCTV"
                      width="150"
                      style={{ borderRadius: "5px" }}
                    />
                    <small style={{ fontSize: "10px", marginBottom: "0" }}>
                      {location}
                    </small>
                    <br />
                    <small style={{ fontSize: "9px", marginTop: "0" }}>
                      {department}
                    </small>
                  </Link>
                </div>
              ))}
          </div>
          <br />
          <br />
          <Paginate
            pages={response && response.totalPages}
            Page={page}
            Limit={limit ? limit : ""}
            location={location}
            department={department}
          />
        </div>
      </div>
    </div>
  );
};

export default Blobs;
