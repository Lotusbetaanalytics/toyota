import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Navbar from "../../components/Navigation/Navbar";
import styles from "../styles.module.css";

import { useSelector } from "react-redux";

import { LionPlayer } from "lion-player";
import "lion-player/dist/lion-skin.min.css";

const PlayVideo = ({ match }) => {
  const url = match.params.url;
  const location = match.params.location;
  const department = match.params.department;
  const getBlobs = useSelector((state) => state.getBlobs);
  const { blobs } = getBlobs;

  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.appGrid}>
        <Navigation />

        <div className={styles.content}>
          <Link to={`/app/videos/${location}/${department}`}>Go Back</Link>
          <LionPlayer src={blobs[`${url}`]} />
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
