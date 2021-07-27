import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { FaThLarge, FaCamera, FaUserCircle, FaSignOutAlt, FaMapMarker } from "react-icons/fa";

import styles from './styles.module.css'
import { logout } from '../../actions/userActions';



const Navigation = () => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <div className={styles.navigation}>

            <ul>
                <Link to="/app/dashboard"><li className="text-center"><FaThLarge /> Dashboard</li></Link>
                <Link to="/app/videos"><li className="text-center"><FaCamera /> Videos</li> </Link>
                <Link to="/app/location"><li className="text-center"><FaMapMarker /> Location</li></Link>
                <Link to="/app/admin"><li className="text-center"><FaUserCircle /> Admin</li></Link>
                <Link to="/#logout" onClick={logoutHandler}><li className="text-center"><FaSignOutAlt />Logout</li></Link>
            </ul>
        </div>
    )
}

export default Navigation
