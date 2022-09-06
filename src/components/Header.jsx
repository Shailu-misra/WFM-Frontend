import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">

                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="button">Sign Out</button>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
