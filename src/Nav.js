import React, { useEffect, useState } from "react";
import './Nav.css'

function Nav(){
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY>100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            // window.removeEventListener('scroll');
        };
    },[]);

    return(
        <div className={`nav ${show && 'nav-black'}`}>
            <img 
                className="netflix-logo"
                src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
                alt='netflix_logo'
            />
            <img
                className="nav-avatar"
                src=" https://www.freepnglogos.com/uploads/nintendo-logo-png/file-micrologo-nintendo-n-logo-circle-18.png"
                alt='nav-avatar'
            />
        </div>
    )
}

export default Nav;