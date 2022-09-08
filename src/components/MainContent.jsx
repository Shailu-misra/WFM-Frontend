import React from "react";
import Dashboard from "./Dashboard";
import {Routes, Route} from 'react-router-dom';
import LineMan from './LineMan';
import AddLineMan from './AddLineMan';
import DeleteLineMan from './DeleteLineMan';
import Header from './Header';
import Footer from './Footer';
import { findByLabelText } from "@testing-library/react";
import WorkAllocation from "./WorkAllocation";
const MainContent = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/lineman' element={<LineMan />} />
                <Route path='/addLineMan' element={<AddLineMan />} />
                <Route path='/deleteLineMan' element={<DeleteLineMan />}/>
                <Route path='/workAllocation' element={<WorkAllocation />} />
                <Route path="/" element={<Dashboard/>} />
            </Routes>
            <Footer/>
        </div>
        
       
    );
}


export default MainContent;