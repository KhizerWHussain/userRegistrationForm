import React from 'react'
import "../Components/Header.css"

const Header = () => {
    const form = "User Registration Form";
    return (
        <nav className='navbar-dark navbar navbar-purple'>
            <div className='row d-flex col-12 text-white text-center justify-content-center'>
                <h3>{form}</h3>
            </div>
        </nav>
    )
}

export default Header;
