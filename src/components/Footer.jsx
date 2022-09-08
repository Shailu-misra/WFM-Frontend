import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {

    let year = new Date().getFullYear();
    return (
       <footer className="bg-light text-center fixed-bottom"><p>Copyright ⓒ {year}</p></footer> 
    );
}


export default Footer;