import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom'
import Footer from './Footer'
const JeDashboard = () => {
    return (
        <div>
            <Header />
            <div>
                <div class="list-group list-group-light">
                    <a
                        href="#"
                        class="list-group-item list-group-item-action px-3 border-0 active"
                        aria-current="true">Disconnection Report</a>
                    <a
                        href="#"
                        class="list-group-item list-group-item-action px-3 border-0">Work Allocation</a>
                    <a
                        href="#"
                        class="list-group-item list-group-item-action px-3 border-0">Add Line Men</a>
                    <a
                        href="#"
                        class="list-group-item list-group-item-action px-3 border-0">Update Line Men</a>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default JeDashboard;
