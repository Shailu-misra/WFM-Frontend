import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {


    return (
        <div>
            <nav className="navbar navbar-dark bg-dark p-3 " >

                <ul className="nav justify-content-end navbar-dark">
                    <li className="nav-item">
                        <a className="navbar-brand" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" href="/report">Disconnection Report</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand " href="/lineman">Line Man</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand " href="/workAllocation">Work Allocation</a>
                    </li>
                </ul>

                
                <div className="my-2 my-lg-0">
                    <Link to="/Login">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button">Sign In</button>
                    </Link>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button">Sign Out</button>
                </div>
            </nav>
        </div>
    );
}

export default Header;