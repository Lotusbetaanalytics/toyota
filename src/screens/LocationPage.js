import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../components/Navigation";
import Navbar from "../components/Navigation/Navbar";
import styles from "./styles.module.css";
import {
  addDepartments,
  addLocations,
  getLocations,
} from "../actions/locationActions";
import Loading from "../components/Loading";

const LocationPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");

  const addLocation = useSelector((state) => state.addLocation);
  const { loading, error, success } = addLocation;

  const addDepartment = useSelector((state) => state.addDepartment);
  const {
    loading: ldepartment,
    error: edepartment,
    success: sdepartment,
  } = addDepartment;

  const getLocation = useSelector((state) => state.getLocation);
  const {
    loading: loadingLocations,
    error: eLocations,
    locations,
  } = getLocation;

  // Add Location
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addLocations(name));
  };

  // Add Departments to location
  const departmentHandler = (e) => {
    e.preventDefault();
    dispatch(addDepartments(department, location));
  };
  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.appGrid}>
        <Navigation />
        <div className={styles.content}>
          <div className={styles.content}>
            {loading || ldepartment ? <Loading /> : ""}
            {edepartment && (
              <div className="alert alert-danger">{edepartment}</div>
            )}
            {error && <div className="alert alert-danger">{error}</div>}
            {success && (
              <div className="alert alert-success">Location Created</div>
            )}
            <form onSubmit={submitHandler}>
              <div className="row">
                <div className={`${styles.formPadding} col-md-6`}>
                  <label>Location</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Location"
                    value={name}
                  />
                </div>

                <div className={`${styles.formPadding} col-md-6`}>
                  <label style={{ visibility: "hidden" }}>Submit</label>
                  <input
                    type="submit"
                    className="form-control btn btn-warning"
                    value="Add Location"
                  />
                </div>
              </div>
            </form>

            <div className="alert alert-info">Add Departments to Location</div>
            {sdepartment && (
              <div className="alert alert-success">Department Added</div>
            )}
            <form onSubmit={departmentHandler}>
              <div className="row">
                <div className={`${styles.formPadding} col-md-4`}>
                  <label>Location</label>
                  <select
                    className="form-control"
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter Location"
                    value={location}
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
                  <label>Department</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Enter Department"
                    value={department}
                  />
                </div>

                <div className={`${styles.formPadding} col-md-4`}>
                  <label style={{ visibility: "hidden" }}>Submit</label>
                  <input
                    type="submit"
                    className="form-control btn btn-info"
                    value="Add Department"
                  />
                </div>
              </div>
            </form>
          </div>
          {loadingLocations && <Loading />}
          {eLocations && <div className="alert alert-danger">{eLocations}</div>}
          <table className="table table-bordered">
            <thead>
              <th>Available Locations</th>
            </thead>
            <tbody>
              {locations &&
                locations.map((items) => (
                  <tr key={items.id}>
                    <td>{items.name}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
